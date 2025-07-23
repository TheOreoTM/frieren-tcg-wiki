import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { convertCategoryToString, getAllNews } from "@/lib/content/news";
import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Newspaper, ArrowRight, Megaphone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NewsCategory } from "@prisma/client";

export const metadata: Metadata = {
    title: "News & Updates",
    description: "Stay up to date with the latest news, expansions, tournaments, and balance changes for Frieren TCG",
    keywords: ["Frieren", "TCG", "news", "updates", "expansions", "tournaments", "balance changes"],
    openGraph: {
        title: "Frieren TCG News & Updates",
        description: "The latest news and announcements for the Frieren Trading Card Game",
        images: [
            {
                url: "/og-news.jpg",
                width: 1200,
                height: 630,
                alt: "Frieren TCG News",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Frieren TCG News & Updates",
        description: "The latest news and announcements for the Frieren Trading Card Game",
        images: ["/og-news.jpg"],
    },
};

// NEW: Theme-aware function to style category badges
function getCategoryTheme(category: NewsCategory) {
    const baseClasses = "text-xs font-bold border backdrop-blur-sm shadow-lg";
    switch (category) {
        case NewsCategory.BALANCE:
            return `${baseClasses} bg-primary/90 text-primary-foreground border-primary/50`;
        case NewsCategory.TOURNAMENT:
            return `${baseClasses} bg-accent/90 text-accent-foreground border-accent/50`;
        case NewsCategory.PATCH:
            return `${baseClasses} bg-secondary/90 text-secondary-foreground border-secondary/50`;
        default:
            return `${baseClasses} bg-muted/80 text-muted-foreground border-border`;
    }
}

export default async function NewsPage() {
    const news = await getAllNews();

    if (news.length === 0) {
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <div className="inline-block rounded-full bg-primary/10 p-4 mb-6 border border-primary/20 shadow-inner">
                        <Newspaper className="h-10 w-10 text-primary" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">News & Updates</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Stay up to date with the latest from Frieren TCG.
                    </p>
                </div>
                <div className="text-center py-16 glass-card border-border/20 rounded-2xl">
                    <div className="max-w-md mx-auto space-y-4">
                        <div className="w-16 h-16 mx-auto bg-muted/20 rounded-full flex items-center justify-center">
                            <Megaphone className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">No News Yet</h3>
                        <p className="text-muted-foreground">
                            The latest announcements and articles will appear here once they are published.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    const featuredNews = news[0];
    const categories = Array.from(new Set(news.map((n) => n.category)));

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Enhanced Header */}
            <div className="text-center mb-12">
                <div className="inline-block rounded-full bg-primary/10 p-4 mb-6 border border-primary/20 shadow-inner">
                    <Newspaper className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">News & Updates</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Stay up to date with the latest from Frieren TCG.
                </p>
            </div>

            {/* Featured News Section */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Megaphone className="h-6 w-6 text-primary" />
                    Latest Update
                </h2>
                <Link href={`/news/${featuredNews.slug}`} className="block group">
                    <Card className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300 border-border/20 hover:border-primary/30 grid grid-cols-1 md:grid-cols-2">
                        <div className="relative aspect-video md:aspect-auto overflow-hidden">
                            <Image
                                src={featuredNews.imageUrl || "/placeholder.svg"}
                                alt={featuredNews.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex flex-col p-6">
                            <CardHeader className="p-0 mb-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <Badge className={getCategoryTheme(featuredNews.category)}>
                                        {convertCategoryToString(featuredNews.category)}
                                    </Badge>
                                    <div className="text-sm text-muted-foreground flex items-center gap-1.5">
                                        <Calendar className="h-3.5 w-3.5" />
                                        {formatDistanceToNow(featuredNews.createdAt, { addSuffix: true })}
                                    </div>
                                </div>
                                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                                    {featuredNews.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 flex-grow">
                                <CardDescription className="leading-relaxed line-clamp-3">
                                    {featuredNews.excerpt}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="p-0 mt-6">
                                <div className="flex items-center font-semibold text-primary">
                                    Read More
                                    <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </div>
                            </CardFooter>
                        </div>
                    </Card>
                </Link>
            </div>

            {/* All News Section with Tabs */}
            <Tabs defaultValue="all">
                <TabsList className="mb-8 bg-muted/20 p-1 rounded-lg border border-border/20 h-auto">
                    <TabsTrigger value="all">All News</TabsTrigger>
                    {categories.map((category) => (
                        <TabsTrigger key={category} value={category}>
                            {convertCategoryToString(category)}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <TabsContent value="all">
                    <ArticleGrid articles={news} />
                </TabsContent>

                {categories.map((category) => (
                    <TabsContent key={category} value={category}>
                        <ArticleGrid articles={news.filter((article) => article.category === category)} />
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}

// NEW: Reusable Article Grid Component
function ArticleGrid({
    articles,
}: {
    articles: (typeof getAllNews extends () => Promise<infer T> ? T : never)[number][];
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
                <Link href={`/news/${article.slug}`} key={article.id} className="block">
                    <Card className="group h-full glass-card hover:shadow-xl transition-all duration-300 overflow-hidden border-border/20 hover:border-primary/30">
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src={article.imageUrl || "/placeholder.svg"}
                                alt={article.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-3 left-3">
                                <Badge className={getCategoryTheme(article.category)}>
                                    {convertCategoryToString(article.category)}
                                </Badge>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                            <CardHeader className="p-0 mb-4">
                                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="h-3.5 w-3.5" />
                                        {formatDistanceToNow(article.createdAt, { addSuffix: true })}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User className="h-3.5 w-3.5" />
                                        {article.author.name}
                                    </div>
                                </div>
                                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                                    {article.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 flex-grow">
                                <CardDescription className="line-clamp-3 leading-relaxed">
                                    {article.excerpt}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="p-0 mt-4">
                                <div className="flex flex-wrap gap-1.5">
                                    {article.tags.slice(0, 3).map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="outline"
                                            className="text-xs bg-muted/15 text-muted-foreground border-muted-foreground/20"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardFooter>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
}
