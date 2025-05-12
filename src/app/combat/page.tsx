import Link from "next/link";
import Image from "next/image";
import { Swords, User, Calendar, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllCombatStrategies } from "@/lib/combat";
import { formatDate } from "@/lib/utils";
import { Characters } from "@/data/characters";
import { CharacterName } from "@/lib/enums";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Combat Strategies | Frieren TCG",
    description: "Learn effective combat strategies for each character in Frieren TCG",
    keywords: ["Frieren", "TCG", "combat", "strategies", "guides"],
    openGraph: {
        title: "Frieren TCG Combat Strategies",
        description: "Learn effective combat strategies for each character in Frieren TCG",
        type: "website",
    },
};

export default function CombatPage() {
    const strategies = getAllCombatStrategies();
    const characters = Array.from(Characters.values());

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Combat Strategies</h1>
            <p className="text-muted-foreground mb-8">Learn how to effectively play each character in Frieren TCG</p>

            {strategies.length === 0 ? (
                <div className="text-center py-12 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h2 className="text-xl font-medium mb-4">No combat strategies found</h2>
                    <p className="text-muted-foreground mb-6">
                        Combat strategies will appear here once they are published.
                    </p>
                    <Link href="/info">
                        <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2">
                            Learn how to contribute
                        </Badge>
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {strategies.map((strategy) => {
                        const character = characters.find((c) => c.name === (strategy.character as CharacterName));
                        console.log(strategy.character);
                        return (
                            <Link href={`/strategies/${strategy.id}`} key={strategy.id}>
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <div className="relative aspect-video">
                                        <Image
                                            alt={strategy.character}
                                            src={character?.cosmetic.imageUrl || "/placeholder.svg"}
                                            fill
                                            className="object-cover rounded-t-lg"
                                        />
                                        <div className="absolute top-0 left-0 right-0 h-32 rounded-t-lg bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
                                        <div className="absolute top-2 left-2">
                                            <Badge className="bg-emerald-100 text-emerald-800">
                                                {strategy.character}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                            <div className="flex items-center">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                {formatDate(strategy.date)}
                                            </div>
                                            <div className="flex items-center">
                                                <User className="h-3 w-3 mr-1" />
                                                {strategy.author}
                                            </div>
                                        </div>
                                        <CardTitle className="line-clamp-2">{strategy.title}</CardTitle>
                                        <CardDescription className="line-clamp-3">
                                            Combat strategy for {strategy.character}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <div className="flex flex-wrap gap-1">
                                            {strategy.tags.slice(0, 3).map((tag) => (
                                                <Badge key={tag} variant="outline" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                            {strategy.tags.length > 3 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{strategy.tags.length - 3} more
                                                </Badge>
                                            )}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            )}

            <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                    <Swords className="h-6 w-6 text-emerald-600" />
                    <h2 className="text-2xl font-bold">Contribute Your Strategies</h2>
                </div>
                <p className="mb-4">
                    Have a winning strategy for a character? Share your knowledge with the community!
                </p>
                <Link href="/info">
                    <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2">
                        Learn how to contribute
                    </Badge>
                </Link>
            </div>
        </div>
    );
}
