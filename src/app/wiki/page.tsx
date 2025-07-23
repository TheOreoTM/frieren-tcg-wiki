import Link from "next/link";
import {
    BookOpen,
    WalletCardsIcon as Cards,
    FileText,
    Sparkles,
    BrainCircuit,
    ArrowRight,
    Library,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllMechanics } from "@/lib/content/mechanics";
import { getMechanicIcon } from "@/lib/utils";

export default async function WikiPage() {
    const mechanics = await getAllMechanics();

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Enhanced Header */}
            <div className="text-center mb-12">
                <div className="inline-block rounded-full bg-primary/10 p-4 mb-6 border border-primary/20 shadow-inner">
                    <Library className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Frieren TCG Wiki</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Your comprehensive guide to the Frieren TCG universe.
                </p>
            </div>

            {/* Main Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <Link href="/wiki/getting-started" className="block">
                    <Card className="group h-full glass-card hover:shadow-xl transition-all duration-300 overflow-hidden border-border/20 hover:border-primary/30 hover:scale-[1.02]">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <FileText className="h-6 w-6 text-primary" />
                                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                                    Getting Started
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                New to Frieren TCG? Start here to learn the basics and play your first game.
                            </p>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/wiki/rulebook" className="block">
                    <Card className="group h-full glass-card hover:shadow-xl transition-all duration-300 overflow-hidden border-border/20 hover:border-primary/30 hover:scale-[1.02]">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <BookOpen className="h-6 w-6 text-primary" />
                                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                                    Rulebook
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                The official rulebook containing all game rules, mechanics, and card interactions.
                            </p>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/characters" className="block">
                    <Card className="group h-full glass-card hover:shadow-xl transition-all duration-300 overflow-hidden border-border/20 hover:border-primary/30 hover:scale-[1.02]">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <Cards className="h-6 w-6 text-primary" />
                                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                                    Character Database
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Explore all available characters, their unique abilities, and their signature cards.
                            </p>
                        </CardContent>
                    </Card>
                </Link>
            </div>

            {/* Game Mechanics Section */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Core Mechanics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mechanics.slice(0, 5).map((mechanic) => {
                        const MechanicIcon = getMechanicIcon(mechanic.icon);
                        return (
                            <Link key={mechanic.slug} href={`/mechanics/${mechanic.slug}`} className="block">
                                <div className="group flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-muted/20 dark:hover:bg-primary/5 transition-all duration-300 border-border/20 hover:border-primary/20">
                                    <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
                                        <MechanicIcon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <div className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
                                            {mechanic.title}
                                        </div>
                                        <div className="text-xs text-muted-foreground truncate">
                                            {mechanic.description}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                    <Link href="/mechanics" className="block">
                        <div className="group flex items-center gap-4 p-4 rounded-xl glass-card bg-primary/5 hover:bg-primary/10 transition-all duration-300 border-primary/20 h-full">
                            <div className="overflow-hidden w-full text-center">
                                <div className="font-medium text-primary transition-colors">View All Mechanics</div>
                                <div className="text-xs text-muted-foreground">Explore the complete guide</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Strategy Guides Section */}
            <div>
                <h2 className="text-2xl font-bold mb-6">Strategy Guides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="/strategies" className="block">
                        <div className="group glass-card p-6 rounded-2xl border-border/20 hover:border-primary/30 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                                    <BrainCircuit className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                        Explore All Guides
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Learn advanced tactics and deck-building techniques.
                                    </p>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
