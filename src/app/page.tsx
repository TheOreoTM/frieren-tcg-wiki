import Link from "next/link";
import { ArrowRight, BookOpen, WalletCardsIcon as Cards, ScrollText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import { getLatestNews } from "@/lib/news";

export const metadata: Metadata = {
    openGraph: {
        images: [
            {
                url: "/thumbnail.jpg",
                width: 1200,
                height: 630,
                alt: "Frieren TCG",
            },
        ],
    },
    twitter: {
        images: ["/thumbnail.jpg"],
    },
};

export default function Home() {
    const latestNews = getLatestNews(5);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col items-center text-center mb-12">
                <div className="mb-6 relative">
                    <Sparkles className="absolute -top-6 -left-6 text-primary h-8 w-8 opacity-70" />
                    <Sparkles className="absolute -bottom-4 -right-4 text-accent h-6 w-6 opacity-70" />
                    <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Frieren TCG</h1>
                </div>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    The trading card game inspired by the journey of the immortal mage Frieren and her companions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="hover:shadow-lg transition-shadow border border-primary/20 rounded-3xl overflow-hidden backdrop-blur-sm bg-white/70">
                    <CardHeader className="bg-gradient-to-br from-primary/10 to-transparent">
                        <CardTitle className="flex items-center gap-2">
                            <Cards className="h-5 w-5 text-primary" />
                            Cards
                        </CardTitle>
                        <CardDescription>Browse the complete card collection</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <p>
                            Discover cards featuring Frieren, Fern, Stark, Himmel and other characters from the series.
                        </p>
                    </CardContent>
                    <CardFooter className="bg-gradient-to-t from-primary/5 to-transparent pt-6">
                        <Link href="/cards" className="w-full">
                            <Button
                                variant="outline"
                                className="w-full rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary"
                            >
                                View Cards <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border border-secondary/30 rounded-3xl overflow-hidden backdrop-blur-sm bg-white/70">
                    <CardHeader className="bg-gradient-to-br from-secondary/20 to-transparent">
                        <CardTitle className="flex items-center gap-2">
                            <ScrollText className="h-5 w-5 text-secondary-foreground" />
                            Mechanics
                        </CardTitle>
                        <CardDescription>Learn how to play the game</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <p>
                            Understand the core mechanics, spell casting, combat, and special abilities in Frieren TCG.
                        </p>
                    </CardContent>
                    <CardFooter className="bg-gradient-to-t from-secondary/10 to-transparent pt-6">
                        <Link href="/mechanics" className="w-full">
                            <Button
                                variant="outline"
                                className="w-full rounded-full border-secondary/30 hover:bg-secondary/20 hover:text-secondary-foreground"
                            >
                                Explore Mechanics <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border border-accent/20 rounded-3xl overflow-hidden backdrop-blur-sm bg-white/70">
                    <CardHeader className="bg-gradient-to-br from-accent/10 to-transparent">
                        <CardTitle className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-accent-foreground" />
                            Wiki
                        </CardTitle>
                        <CardDescription>Dive into the lore and strategy</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <p>Explore in-depth articles about game strategy, card synergies, and the world of Frieren.</p>
                    </CardContent>
                    <CardFooter className="bg-gradient-to-t from-accent/5 to-transparent pt-6">
                        <Link href="/wiki" className="w-full">
                            <Button
                                variant="outline"
                                className="w-full rounded-full border-accent/20 hover:bg-accent/10 hover:text-accent-foreground"
                            >
                                Visit Wiki <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>

            <div className="cozy-section bg-white/60 backdrop-blur-sm shadow-md border border-primary/10 mb-12">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Latest Updates</h2>

                    <Link href="/news">
                        <Button variant="outline" size="sm" className="rounded-full hover:bg-primary/10">
                            View All News
                        </Button>
                    </Link>
                </div>
                <ul>
                    {latestNews.map((article) => (
                        <Link href={`/news/${article.id}`} key={article.id}>
                            <li className="flex items-start bg-accent/20 p-2.5 rounded-2xl hover:bg-secondary/60 transition-colors my-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <span className="text-primary">•</span>
                                    <span className="font-semibold">{article.title}:</span>
                                    <span className="text-muted-foreground text-sm">{article.excerpt}</span>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>

            <div className="text-center cozy-section bg-white/60 backdrop-blur-sm shadow-md border border-primary/10">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Begin Your Journey</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Whether you're a seasoned card player or new to TCGs, Frieren TCG offers a magical experience that
                    captures the essence of the beloved series.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/wiki/getting-started">
                        <Button className="rounded-full bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all">
                            Getting Started Guide
                        </Button>
                    </Link>
                    <Link href="/cards">
                        <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/10">
                            Browse Cards
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
