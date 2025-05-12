import type { NewsCategory } from "@prisma/client";

export interface BaseContent {
    id: string;
    title: string;
    slug: string;
    published: boolean;
    authorId: string;
    author: {
        name?: string | null;
        image?: string | null;
    };
    createdAt: Date;
    updatedAt: Date;
}

export interface NewsArticle extends BaseContent {
    hidden: boolean;
    excerpt: string;
    content: string;
    category: NewsCategory;
    imageUrl?: string | null;
    tags: string[];
}

export interface Mechanic extends BaseContent {
    name: string;
    description: string;
    icon: string;
    overview: string;
    rules: string;
    examples: string;
}

export interface StrategyGuide extends BaseContent {
    content: string;
    characterId?: string | null;
    tags: string[];
}

export type ContentItem = NewsArticle | Mechanic | StrategyGuide;

export type ContentType = "news" | "mechanics" | "strategies";
