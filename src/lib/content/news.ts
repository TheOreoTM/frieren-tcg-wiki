import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { prisma } from "@/lib/prisma";
import type { NewsArticle } from "@/lib/types/content";
import { NewsCategory } from "@prisma/client";

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

export function convertCategoryToString(category: NewsCategory) {
    switch (category) {
        case NewsCategory.TOURNAMENT:
            return "Tournament";
        case NewsCategory.BALANCE:
            return "Balance";
        case NewsCategory.COMMUNITY:
            return "Community";
        case NewsCategory.FEATURE:
            return "Feature";
        case NewsCategory.PATCH:
            return "Patch Note";
        default:
            return "News";
    }
}

export function getCategoryColor(category: NewsCategory): string {
    switch (category) {
        case NewsCategory.PATCH:
            return "bg-purple-100 text-purple-800 hover:bg-purple-200";
        case NewsCategory.TOURNAMENT:
            return "bg-blue-100 text-blue-800 hover:bg-blue-200";
        case NewsCategory.BALANCE:
            return "bg-amber-100 text-amber-800 hover:bg-amber-200";
        case NewsCategory.COMMUNITY:
            return "bg-green-100 text-green-800 hover:bg-green-200";
        case NewsCategory.FEATURE:
            return "bg-red-100 text-red-800 hover:bg-red-200";
        default:
            return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
}
