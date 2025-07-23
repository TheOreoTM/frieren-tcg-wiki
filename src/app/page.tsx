import Link from "next/link";
import { ArrowRight, BookOpen, WalletCardsIcon as Cards, ScrollText, Sparkles, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import { getAllNews } from "@/lib/content/news";

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

export default async function Home() {
    const news = await getAllNews();

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-16">
                <div className="mb-6 relative">
                    <Sparkles className="absolute -top-8 -left-8 text-primary h-10 w-10 opacity-70" />
                    <Sparkles className="absolute -bottom-6 -right-6 text-accent h-8 w-8 opacity-70" />
                    <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">Frieren TCG</h1>
                </div>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    The trading card game inspired by the journey of the immortal mage Frieren and her companions.
                </p>
            </div>

            {/* Main Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <Link href="/cards" className="block">
                    <Card className="group h-full glass-card hover:shadow-xl transition-all duration-300 overflow-hidden border-border/20 hover:border-primary/30 hover:scale-[1.02]">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <Cards className="h-6 w-6 text-primary" />
                                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                                        Cards
                                    </CardTitle>
                                </div>
                                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Discover cards featuring Frieren, Fern, Stark, Himmel and other characters from the
                                series.
                            </p>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/mechanics" className="block">
                    <Card className="group h-full glass-card hover:shadow-xl transition-all duration-300 overflow-hidden border-border/20 hover:border-secondary/30 hover:scale-[1.02]">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <ScrollText className="h-6 w-6 text-secondary-foreground" />
                                    <CardTitle className="text-lg font-semibold group-hover:text-secondary-foreground transition-colors">
                                        Mechanics
                                    </CardTitle>
                                </div>
                                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Understand the core mechanics, spell casting, combat, and special abilities in Frieren
                                TCG.
                            </p>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/wiki" className="block">
                    <Card className="group h-full glass-card hover:shadow-xl transition-all duration-300 overflow-hidden border-border/20 hover:border-accent/30 hover:scale-[1.02]">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <BookOpen className="h-6 w-6 text-accent" />
                                    <CardTitle className="text-lg font-semibold group-hover:text-accent transition-colors">
                                        Wiki
                                    </CardTitle>
                                </div>
                                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Explore in-depth articles about game strategy, card synergies, and the world of Frieren.
                            </p>
                        </CardContent>
                    </Card>
                </Link>
            </div>

            {/* Latest Updates Section */}
            <div className="cozy-section mb-16">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Latest Updates</h2>
                    <Link href="/news">
                        <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full hover:bg-primary/10 border-border/30"
                        >
                            View All News
                        </Button>
                    </Link>
                </div>
                <div className="space-y-4">
                    {news.slice(0, 5).map((article) => (
                        <Link href={`/news/${article.slug}`} key={article.id}>
                            <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-muted/20 dark:hover:bg-primary/5 transition-colors duration-200">
                                <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
                                    <Newspaper className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex-grow">
                                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                        {article.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground line-clamp-1">{article.excerpt}</p>
                                </div>
                                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* "Begin Your Journey" Section */}
            <div className="text-center cozy-section">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Begin Your Journey</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Whether you're a seasoned card player or new to TCGs, Frieren TCG offers a magical experience that
                    captures the essence of the beloved series.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/wiki/getting-started">
                        <Button
                            size="lg"
                            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/20 transition-all duration-300"
                        >
                            Getting Started Guide
                        </Button>
                    </Link>
                    <Link href="/cards">
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full border-border/30 hover:bg-primary/10"
                        >
                            Browse Cards
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
