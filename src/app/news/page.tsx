import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { newsArticles, getLatestNews } from "@/data/news";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "News & Updates | Frieren TCG",
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

function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
}

function getCategoryColor(category: string): string {
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

export default function NewsPage() {
    const featuredArticle = getLatestNews(1)[0];

    const sortedArticles = [...newsArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const categories = Array.from(new Set(newsArticles.map((article) => article.category)));

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">News & Updates</h1>
            <p className="text-muted-foreground mb-8">Stay up to date with the latest from Frieren TCG</p>

            {/* Featured Article */}
            <div className="mb-12">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-sm mr-2">Featured</span>
                    Latest Update
                </h2>
                <Link href={`/news/${featuredArticle.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="md:flex">
                            <div className="md:w-1/3 relative">
                                <div className="aspect-video md:h-full relative">
                                    <Image
                                        src={featuredArticle.image || "/placeholder.svg"}
                                        alt={featuredArticle.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge className={getCategoryColor(featuredArticle.category)}>
                                            {featuredArticle.category}
                                        </Badge>
                                        <div className="text-sm text-muted-foreground flex items-center">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            {formatDate(featuredArticle.date)}
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl">{featuredArticle.title}</CardTitle>
                                    <CardDescription>{featuredArticle.excerpt}</CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button variant="outline">Read More</Button>
                                </CardFooter>
                            </div>
                        </div>
                    </Card>
                </Link>
            </div>

            {/* All News */}
            <Tabs defaultValue="all">
                <TabsList className="mb-6">
                    <TabsTrigger value="all">All News</TabsTrigger>
                    {categories.map((category) => (
                        <TabsTrigger key={category} value={category}>
                            {category}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <TabsContent value="all">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedArticles.map((article) => (
                            <Link href={`/news/${article.id}`} key={article.id}>
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <div className="relative aspect-video">
                                        <Image
                                            src={article.image || "/placeholder.svg"}
                                            alt={article.title}
                                            fill
                                            className="object-cover rounded-t-lg"
                                        />
                                        <div className="absolute top-2 left-2">
                                            <Badge className={getCategoryColor(article.category)}>
                                                {article.category}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                            <div className="flex items-center">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                {formatDate(article.date)}
                                            </div>
                                            <div className="flex items-center">
                                                <User className="h-3 w-3 mr-1" />
                                                {article.author}
                                            </div>
                                        </div>
                                        <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                                        <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <div className="flex flex-wrap gap-1">
                                            {article.tags.slice(0, 3).map((tag) => (
                                                <Badge key={tag} variant="outline" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                            {article.tags.length > 3 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{article.tags.length - 3} more
                                                </Badge>
                                            )}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </TabsContent>

                {categories.map((category) => (
                    <TabsContent key={category} value={category}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sortedArticles
                                .filter((article) => article.category === category)
                                .map((article) => (
                                    <Link href={`/news/${article.id}`} key={article.id}>
                                        <Card className="h-full hover:shadow-lg transition-shadow">
                                            <div className="relative aspect-video">
                                                <Image
                                                    src={article.image || "/placeholder.svg"}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover rounded-t-lg"
                                                />
                                            </div>
                                            <CardHeader>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                                    <div className="flex items-center">
                                                        <Calendar className="h-3 w-3 mr-1" />
                                                        {formatDate(article.date)}
                                                    </div>
                                                    <div className="flex items-center">
                                                        <User className="h-3 w-3 mr-1" />
                                                        {article.author}
                                                    </div>
                                                </div>
                                                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                                                <CardDescription className="line-clamp-3">
                                                    {article.excerpt}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardFooter>
                                                <div className="flex flex-wrap gap-1">
                                                    {article.tags.slice(0, 3).map((tag) => (
                                                        <Badge key={tag} variant="outline" className="text-xs">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                    {article.tags.length > 3 && (
                                                        <Badge variant="outline" className="text-xs">
                                                            +{article.tags.length - 3} more
                                                        </Badge>
                                                    )}
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </Link>
                                ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
