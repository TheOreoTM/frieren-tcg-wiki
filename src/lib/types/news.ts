export interface NewsArticle {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    category: "Expansion" | "Tournament" | "Balance" | "Community" | "Feature";
    image?: string;
    tags: string[];
}
