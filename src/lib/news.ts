import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { toast } from "sonner";

const newsDirectory = path.join(process.cwd(), "src/content/news");

export interface NewsArticle {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    category: "Patch" | "Tournament" | "Balance" | "Community" | "Feature";
    image?: string;
    pageImage?: boolean;
    tags: string[];
}

export function getNewsFiles() {
    try {
        return fs.readdirSync(newsDirectory);
    } catch (error) {
        console.error("Error reading news directory:", error);
        return [];
    }
}

export function getNewsArticleById(id: string): NewsArticle | undefined {
    try {
        const fullPath = path.join(newsDirectory, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            id,
            title: data.title,
            excerpt: data.excerpt,
            content,
            date: data.date,
            author: data.author,
            category: data.category,
            image: data.image,
            tags: data.tags || [],
        };
    } catch (error) {
        return undefined;
    }
}

export function getAllNewsArticles(): NewsArticle[] {
    try {
        const fileNames = getNewsFiles();
        const allNewsData = fileNames.map((fileName) => {
            const id = fileName.replace(/\.md$/, "");

            const fullPath = path.join(newsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");

            const { data, content } = matter(fileContents);

            return {
                id,
                title: data.title,
                excerpt: data.excerpt,
                content,
                date: data.date,
                author: data.author,
                category: data.category,
                image: data.image,
                tags: data.tags || [],
            };
        });

        // Sort posts by date
        return allNewsData.sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            } else {
                return -1;
            }
        });
    } catch (error) {
        console.error("Error getting all news articles:", error);
        return [];
    }
}

export function getLatestNews(count = 3): NewsArticle[] {
    return getAllNewsArticles().slice(0, count);
}

export function getNewsByCategory(category: NewsArticle["category"]): NewsArticle[] {
    return getAllNewsArticles().filter((article) => article.category === category);
}

export function getCategoryColor(category: string): string {
    switch (category) {
        case "Expansion":
            return "bg-purple-100 text-purple-800 hover:bg-purple-200";
        case "Tournament":
            return "bg-blue-100 text-blue-800 hover:bg-blue-200";
        case "Balance":
            return "bg-amber-100 text-amber-800 hover:bg-amber-200";
        case "Community":
            return "bg-green-100 text-green-800 hover:bg-green-200";
        case "Feature":
            return "bg-red-100 text-red-800 hover:bg-red-200";
        default:
            return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
}
