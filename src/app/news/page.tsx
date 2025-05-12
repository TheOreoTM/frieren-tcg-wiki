import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { convertCategoryToString, getAllNews, getLatestNews } from "@/lib/content/news";
import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { getCategoryColor } from "@/lib/content/news";
import { Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

export default async function NewsPage() {
    const news = await getAllNews();

    if (news.length === 0) {
        return (
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">News & Updates</h1>
                <p className="text-muted-foreground mb-8">Stay up to date with the latest from Frieren TCG</p>

                <div className="text-center py-12">
                    <h2 className="text-xl font-medium mb-4">No news articles found</h2>
                    <p className="text-muted-foreground mb-6">
                        News articles will appear here once they are published.
                    </p>
                </div>
            </div>
        );
    }

    const featuredNews = news.slice(0, 1)[0];
    const categories = Array.from(new Set(news.map((n) => n.category)));

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">News & Updates</h1>
            <p className="text-muted-foreground mb-8">Stay up to date with the latest from Frieren TCG</p>

            <div className="mb-12">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm mr-2">
                        Featured
                    </span>
                    Latest Update
                </h2>
                <Link href={`/news/${featuredNews.slug}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="md:flex">
                            <div className="md:w-1/3 relative">
                                <div className="aspect-video md:h-full relative">
                                    <Image
                                        src={featuredNews.imageUrl || "/placeholder.svg"}
                                        alt={featuredNews.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge className={getCategoryColor(featuredNews.category)}>
                                            {featuredNews.category}
                                        </Badge>
                                        <div className="text-sm text-muted-foreground flex items-center">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            {formatDistanceToNow(featuredNews.createdAt)} ago
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl">{featuredNews.title}</CardTitle>
                                    <CardDescription>{featuredNews.excerpt}</CardDescription>
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
                            {convertCategoryToString(category)}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value="all">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {news.map((article) => (
                            <Link href={`/news/${article.id}`} key={article.id}>
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <div className="relative aspect-video">
                                        <Image
                                            src={article.imageUrl || "/placeholder.svg"}
                                            alt={article.title}
                                            fill
                                            className="object-cover rounded-t-lg "
                                        />
                                        <div className="absolute top-0 left-0 right-0 h-32 rounded-t-lg bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
                                        <div className="absolute top-2 left-2">
                                            <Badge className={getCategoryColor(article.category)}>
                                                {convertCategoryToString(article.category)}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                            <div className="flex items-center">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                {formatDistanceToNow(article.createdAt)} ago
                                            </div>
                                            <div className="flex items-center">
                                                <User className="h-3 w-3 mr-1" />
                                                {article.author.name}
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
                            {news
                                .filter((article) => article.category === category)
                                .map((article) => (
                                    <Link href={`/news/${article.id}`} key={article.id}>
                                        <Card className="h-full hover:shadow-lg transition-shadow">
                                            <div className="relative aspect-video">
                                                <Image
                                                    src={article.imageUrl || "/placeholder.svg"}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover rounded-t-lg"
                                                />
                                            </div>
                                            <CardHeader>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                                    <div className="flex items-center">
                                                        <Calendar className="h-3 w-3 mr-1" />
                                                        {formatDistanceToNow(article.createdAt)}
                                                    </div>
                                                    <div className="flex items-center">
                                                        <User className="h-3 w-3 mr-1" />
                                                        {article.author.name}
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

            {/* Basic All News */}
            {/* <div className="grid grid-cols-1 gap-6">
                {news.map((article) => (
                    <Link key={article.id} href={`/news/${article.slug}`}>
                        <Card className="hover:shadow-md transition-shadow cursor-pointer">
                            <CardHeader>
                                <CardTitle>{article.title}</CardTitle>
                                <CardDescription>
                                    {formatDistanceToNow(new Date(article.createdAt), { addSuffix: true })} by{" "}
                                    {article.author.name || "Anonymous"}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{article.excerpt}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div> */}
        </div>
    );
}
