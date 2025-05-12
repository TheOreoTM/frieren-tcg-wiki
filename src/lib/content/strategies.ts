import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { prisma } from "@/lib/prisma";
import type { StrategyGuide } from "@/lib/types/content";

const strategiesDirectory = path.join(process.cwd(), "src/content/strategies");

export async function getAllStrategies(includeUnpublished = false): Promise<StrategyGuide[]> {
    console.log(strategiesDirectory);
    const dbStrategies = await prisma.strategyGuide.findMany({
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

    // Then, get strategy guides from the file system
    let fileStrategies: StrategyGuide[] = [];

    try {
        if (fs.existsSync(strategiesDirectory)) {
            const fileNames = fs.readdirSync(strategiesDirectory);

            fileStrategies = fileNames
                .filter((fileName) => fileName.endsWith(".md"))
                .map((fileName) => {
                    const slug = fileName.replace(/\.md$/, "");
                    const fullPath = path.join(strategiesDirectory, fileName);
                    const fileContents = fs.readFileSync(fullPath, "utf8");
                    const { data, content } = matter(fileContents);

                    return {
                        id: slug,
                        slug,
                        title: data.title,
                        content,
                        characterId: data.character || null,
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
                });
        }
    } catch (error) {
        console.error("Error reading strategy guides from file system:", error);
    }

    const dbSlugs = new Set(dbStrategies.map((strategy) => strategy.slug));
    const filteredFileStrategies = fileStrategies.filter((strategy) => !dbSlugs.has(strategy.slug));

    // Combine both sources
    return [...dbStrategies, ...filteredFileStrategies];
}

export async function getStrategyBySlug(slug: string) {
    // First, try to get from database
    const dbStrategy = await prisma.strategyGuide.findUnique({
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

    if (dbStrategy) {
        return dbStrategy;
    }

    // If not found in database, try file system
    try {
        const fullPath = path.join(strategiesDirectory, `${slug}.md`);

        if (fs.existsSync(fullPath)) {
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                id: slug,
                slug,
                title: data.title,
                content,
                characterId: data.character || null,
                tags: data.tags || [],
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
        console.error(`Error reading strategy guide ${slug} from file system:`, error);
    }

    return null;
}
