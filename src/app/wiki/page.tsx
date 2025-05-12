import Link from "next/link";
import { BookOpen, WalletCardsIcon as Cards, FileText, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FrierenTCGWiki } from "@/components/frieren-tcg-wiki";
import { getAllMechanics } from "@/lib/mechanics";
import { getMechanicIcon } from "@/lib/utils";

export default function WikiPage() {
    const mechanics = getAllMechanics();

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col items-center text-center mb-12">
                <FrierenTCGWiki />
                <p className="text-xl text-muted-foreground max-w-2xl">Your comprehensive guide to the Frieren TCG.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <Link href="/wiki/getting-started">
                    <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileText className="h-5 w-5 text-emerald-600" />
                                Getting Started
                            </CardTitle>
                            <CardDescription>New to Frieren TCG? Start here!</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Learn the basics of Frieren TCG, including how to use new mechanics and play your first
                                game.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="ghost" className="w-full">
                                Read Guide
                            </Button>
                        </CardFooter>
                    </Card>
                </Link>

                <Link href="/wiki/rulebook">
                    <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-emerald-600" />
                                Rulebook
                            </CardTitle>
                            <CardDescription>Complete game rules and mechanics</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                The official rulebook containing all game rules, mechanics, and card interactions.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="ghost" className="w-full">
                                View Rulebook
                            </Button>
                        </CardFooter>
                    </Card>
                </Link>

                <Link href="/characters">
                    <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Cards className="h-5 w-5 text-emerald-600" />
                                Character Database
                            </CardTitle>
                            <CardDescription>Browse all available characters</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Search and filter through all cards in Frieren TCG, including their abilities and stats.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="ghost" className="w-full">
                                Browse Character Cards
                            </Button>
                        </CardFooter>
                    </Card>
                </Link>
            </div>

            <h2 className="text-2xl font-bold mb-6">Game Mechanics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {mechanics.map((mechanic) => (
                    <Link key={mechanic.overview?.id} href={`/mechanics/${mechanic.overview?.id}`}>
                        <Button variant="outline" className="w-full justify-start h-auto py-3">
                            {getMechanicIcon(mechanic.overview!.icon!)}
                            <div className="text-left overflow-hidden">
                                <div className="font-medium">{mechanic.overview?.name}</div>
                                <div className="text-xs text-muted-foreground">{mechanic.overview?.description}</div>
                            </div>
                        </Button>
                    </Link>
                ))}
                {/* <Link href="/mechanics">
                    <Button variant="outline" className="w-full justify-start h-auto py-3">
                        <div className="text-left">
                            <div className="font-medium">View All Mechanics</div>
                            <div className="text-xs text-muted-foreground">Complete mechanics guide</div>
                        </div>
                    </Button>
                </Link> */}
            </div>

            <h2 className="text-2xl font-bold mb-6">Strategy Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Link href="/strategies">
                    <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle>Combat Guide</CardTitle>
                            <CardDescription>Learn how to fight against specific opponents</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Understand the principles of combat, including strategy, tactics, and mechanics.
                            </p>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    );
}
