import Link from "next/link";
import { ArrowRight, BookOpen, WalletCardsIcon as Cards, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FrierenTCG } from "@/components/frieren-tcg";
import type { Metadata } from "next";

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
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col items-center text-center mb-12">
                <FrierenTCG />
                <p className="text-xl text-muted-foreground max-w-2xl">
                    A fan-made trading card game inspired by the anime Frieren: Beyond Journey's End
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Cards className="h-5 w-5" />
                            Characters
                        </CardTitle>
                        <CardDescription>Browse the complete character card collection</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Discover characters featuring Frieren, Fern, Stark, Himmel and other characters from the
                            series.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Link href="/characters" className="w-full">
                            <Button variant="outline" className="w-full">
                                View Characters <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ScrollText className="h-5 w-5" />
                            Mechanics
                        </CardTitle>
                        <CardDescription>Learn how to play the game</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Understand the core mechanics, card empowering, combat, and special abilities in Frieren
                            TCG.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Link href="/mechanics" className="w-full">
                            <Button variant="outline" className="w-full">
                                Explore Mechanics <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5" />
                            Wiki
                        </CardTitle>
                        <CardDescription>Dive into and strategy</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Explore in-depth articles about game strategy and synergies</p>
                    </CardContent>
                    <CardFooter>
                        <Link href="/wiki" className="w-full">
                            <Button variant="outline" className="w-full">
                                Visit Wiki <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/30 to-accent/30 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
                <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-600">•</span>
                        <span>First Edition of the Frierencord TCG Tournament Series takes place</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-600">•</span>
                        <span>TCG Bot comes out of closed beta</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-600">•</span>
                        <span>Release of Denken and Himmel</span>
                    </li>
                </ul>
            </div>

            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Begin Your Journey</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Whether you're a seasoned card player or new to TCGs, Frieren TCG offers a magical experience that
                    captures the essence of the beloved series.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/wiki/getting-started">
                        <Button>Getting Started Guide</Button>
                    </Link>
                    <Link href="/characters">
                        <Button variant="outline">Browse Character Cards</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
