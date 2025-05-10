import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles, Swords, Shield, Flame, Zap, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllMechanics } from "@/lib/mechanics";
import type { JSX } from "react";

const renderLucideIcon = (iconName?: string): JSX.Element => {
    const iconProps = { className: "h-6 w-6" };

    switch (iconName?.toLowerCase()) {
        case "sword":
        case "swords":
            return <Swords {...iconProps} color="text-red-500" />;
        case "sparkles":
            return <Sparkles {...iconProps} className="text-blue-500" />;
        case "shield":
            return <Shield {...iconProps} className="text-green-500" />;
        case "flame":
            return <Flame {...iconProps} className="text-orange-500" />;
        case "zap":
            return <Zap {...iconProps} className="text-yellow-500" />;
        case "bookopen":
            return <BookOpen {...iconProps} className="text-purple-500" />;
        case "sparkles":
            return <Sparkles {...iconProps} className="text-blue-500" />;
        default:
            return <HelpCircle {...iconProps} className="text-gray-500" />; // Fallback icon
    }
};

export default function MechanicsPage() {
    const fetchedMechanics = getAllMechanics();

    const validMechanics = fetchedMechanics.filter((mechanic) => mechanic && mechanic.overview);

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Game Mechanics</h1>
            <p className="text-xl text-muted-foreground mb-8">
                Learn about the core systems and rules that make up Frieren TCG.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {validMechanics.map((mechanicData) => {
                    if (!mechanicData.overview) {
                        return null;
                    }
                    const mechanic = mechanicData.overview;
                    const iconElement = renderLucideIcon(mechanic.icon);

                    return (
                        <Link href={`/mechanics/${mechanic.id}`} key={mechanic.id}>
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <span className="flex items-center gap-2">
                                        <div>{iconElement}</div>
                                        <CardTitle>{mechanic.name}</CardTitle>
                                    </span>
                                    <CardDescription>{mechanic.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Click to learn more about how {mechanic.name.toLowerCase()} works in Frieren
                                        TCG.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="ghost" className="w-full">
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Link>
                    );
                })}
            </div>

            <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-6 w-6 text-emerald-600" />
                    <h2 className="text-2xl font-bold">Core Rulebook</h2>
                </div>
                <p className="mb-4">
                    For a comprehensive guide to all game mechanics and rules, check out the official Frieren TCG Core
                    Rulebook.
                </p>
                <Link href="/wiki/rulebook">
                    <Button variant="secondary">View Rulebook</Button>
                </Link>
            </div>
        </div>
    );
}
