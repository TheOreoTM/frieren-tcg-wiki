import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { prisma } from "@/lib/prisma";
import type { Mechanic } from "@/lib/types/content";

const mechanicsDirectory = path.join(process.cwd(), "src/content/mechanics");

export async function getAllMechanics(includeUnpublished = false) {
    const dbMechanics = await prisma.mechanic.findMany({
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
            title: "asc",
        },
    });

    // Then, get mechanics from the file system
    let fileMechanics: Mechanic[] = [];

    try {
        if (fs.existsSync(mechanicsDirectory)) {
            const subDirs = fs
                .readdirSync(mechanicsDirectory, { withFileTypes: true })
                .filter((dirent) => dirent.isDirectory())
                .map((dirent) => dirent.name);

            fileMechanics = subDirs.map((slug) => {
                const mechanicDir = path.join(mechanicsDirectory, slug);

                // Read overview.md
                const overviewPath = path.join(mechanicDir, "overview.md");
                const overviewContent = fs.existsSync(overviewPath) ? fs.readFileSync(overviewPath, "utf8") : "";
                const { data: overviewData, content: overviewText } = matter(overviewContent);

                // Read rules.md
                const rulesPath = path.join(mechanicDir, "rules.md");
                const rulesContent = fs.existsSync(rulesPath) ? fs.readFileSync(rulesPath, "utf8") : "";
                const { content: rulesText } = matter(rulesContent);

                // Read examples.md
                const examplesPath = path.join(mechanicDir, "examples.md");
                const examplesContent = fs.existsSync(examplesPath) ? fs.readFileSync(examplesPath, "utf8") : "";
                const { content: examplesText } = matter(examplesContent);

                return {
                    id: slug,
                    slug,
                    title: overviewData.name || slug,
                    description: overviewData.description || "",
                    icon: overviewData.icon || "help-circle",
                    overview: overviewText,
                    rules: rulesText,
                    examples: examplesText,
                    published: true,
                    authorId: "file-system",
                    author: {
                        name: overviewData.author || "Frieren TCG Team",
                        image: null,
                    },
                    createdAt: new Date(overviewData.date || Date.now()),
                    updatedAt: new Date(overviewData.date || Date.now()),
                };
            });
        }
    } catch (error) {
        console.error("Error reading mechanics from file system:", error);
    }

    // Check if we already have a DB entry for any file-based mechanics (by slug)
    // If so, prioritize the DB version
    const dbSlugs = new Set(dbMechanics.map((mechanic) => mechanic.slug));
    const filteredFileMechanics = fileMechanics.filter((mechanic) => !dbSlugs.has(mechanic.slug));

    return [...dbMechanics, ...filteredFileMechanics];
}

export async function getMechanicBySlug(slug: string) {
    const dbMechanic = await prisma.mechanic.findUnique({
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

    if (dbMechanic) {
        return dbMechanic;
    }

    // If not found in database, try file system
    try {
        const mechanicDir = path.join(mechanicsDirectory, slug);

        if (fs.existsSync(mechanicDir)) {
            // Read overview.md
            const overviewPath = path.join(mechanicDir, "overview.md");
            const overviewContent = fs.existsSync(overviewPath) ? fs.readFileSync(overviewPath, "utf8") : "";
            const { data: overviewData, content: overviewText } = matter(overviewContent);

            // Read rules.md
            const rulesPath = path.join(mechanicDir, "rules.md");
            const rulesContent = fs.existsSync(rulesPath) ? fs.readFileSync(rulesPath, "utf8") : "";
            const { content: rulesText } = matter(rulesContent);

            // Read examples.md
            const examplesPath = path.join(mechanicDir, "examples.md");
            const examplesContent = fs.existsSync(examplesPath) ? fs.readFileSync(examplesPath, "utf8") : "";
            const { content: examplesText } = matter(examplesContent);

            return {
                id: slug,
                slug,
                title: overviewData.name || slug,
                name: overviewData.name || slug,
                description: overviewData.description || "",
                icon: overviewData.icon || "help-circle",
                overview: overviewText,
                rules: rulesText,
                examples: examplesText,
                published: true,
                authorId: "file-system",
                author: {
                    name: overviewData.author || "Frieren TCG Team",
                    image: null,
                },
                createdAt: new Date(overviewData.date || Date.now()),
                updatedAt: new Date(overviewData.date || Date.now()),
            };
        }
    } catch (error) {
        console.error(`Error reading mechanic ${slug} from file system:`, error);
    }

    return null;
}
