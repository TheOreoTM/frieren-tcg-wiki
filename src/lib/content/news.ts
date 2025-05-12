import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { prisma } from "@/lib/prisma";
import type { NewsArticle } from "@/lib/types/content";

const newsDirectory = path.join(process.cwd(), "src/content/news");

export async function getAllNews(includeUnpublished = false) {
    const dbNews = await prisma.news.findMany({
        where: includeUnpublished ? {} : { published: true },
        include: {
            author: {
                select: {
                    name: true,
                    image: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    // Then, get news from the file system
    let fileNews: NewsArticle[] = [];

    try {
        if (fs.existsSync(newsDirectory)) {
            const fileNames = fs.readdirSync(newsDirectory);

            fileNews = fileNames
                .filter((fileName) => fileName.endsWith(".md"))
                .map((fileName) => {
                    const slug = fileName.replace(/\.md$/, "");
                    const fullPath = path.join(newsDirectory, fileName);
                    const fileContents = fs.readFileSync(fullPath, "utf8");
                    const { data, content } = matter(fileContents);

                    return {
                        id: slug,
                        slug,
                        title: data.title,
                        excerpt: data.excerpt || "",
                        content,
                        imageUrl: data.image || null,
                        tags: data.tags || [],
                        hidden: data.hidden === "true",
                        category: data.category,
                        published: true,
                        authorId: "file-system",
                        author: {
                            name: data.author || "Frieren TCG Team",
                            image: null,
                        },
                        createdAt: new Date(data.date || Date.now()),
                        updatedAt: new Date(data.date || Date.now()),
                    };
                });
        }
    } catch (error) {
        console.error("Error reading news from file system:", error);
    }

    // Check if we already have a DB entry for any file-based news (by slug)
    // If so, prioritize the DB version
    const dbSlugs = new Set(dbNews.map((news) => news.slug));
    const filteredFileNews = fileNews.filter((news) => !dbSlugs.has(news.slug));
    const combinedNews = [...dbNews, ...filteredFileNews];
    const sortedNews = combinedNews.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    return combinedNews.filter((article) => article.hidden !== true);
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
    // First, try to get from database
    const dbNews = await prisma.news.findUnique({
        where: {
            slug,
            published: true,
        },
        include: {
            author: {
                select: {
                    name: true,
                    image: true,
                },
            },
        },
    });

    if (dbNews) {
        return dbNews;
    }

    // If not found in database, try file system
    try {
        const fullPath = path.join(newsDirectory, `${slug}.md`);

        if (fs.existsSync(fullPath)) {
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                id: slug,
                slug,
                title: data.title,
                category: data.category,
                hidden: data.hidden === "true",
                excerpt: data.excerpt || "",
                content,
                imageUrl: data.image || null,
                tags: data.tags as string[],
                published: true,
                authorId: "file-system",
                author: {
                    name: data.author || "Frieren TCG Team",
                    image: null,
                },
                createdAt: new Date(data.date || Date.now()),
                updatedAt: new Date(data.date || Date.now()),
            };
        }
    } catch (error) {
        console.error(`Error reading news ${slug} from file system:`, error);
    }

    return null;
}

export async function getLatestNews(limit: number) {
    const dbNews = await prisma.news.findMany({
        where: {
            published: true,
        },
        orderBy: {
            createdAt: "desc",
        },
        take: limit,
    });

    return dbNews;
}
