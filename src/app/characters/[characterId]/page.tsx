import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Scroll } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Characters } from "@/data/characters";
import { Stat } from "@/lib/enums";
import StyledDescription from "@/components/styled-description";
import CardPreview from "@/components/card/card-preview";
import type { Metadata, ResolvingMetadata } from "next";

interface PageProps {
    params: Promise<{ characterId: string }>;
}

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
    const { characterId } = await params;

    const characters = Array.from(Characters.values());
    const character = characters.find((c) => c.id === characterId);

    if (!character) {
        return {
            title: "Character Not Found",
            description: "The requested character could not be found",
        };
    }

    return {
        title: `${character.name}`,
        description: character.description || `Learn about ${character.name} in the Frieren TCG universe`,
        openGraph: {
            title: character.name,
            description: character.description,
            images: [
                {
                    url: character.cosmetic.imageUrl || character.cosmetic.icon || "/placeholder.svg",
                    alt: character.name,
                },
            ],
        },
    };
}

const characters = Array.from(Characters.values());

function getStatColor(stat: Stat) {
    switch (stat) {
        case Stat.HP:
            return "bg-emerald-100 text-emerald-800";
        case Stat.ATK:
            return "bg-red-100 text-red-800";
        case Stat.DEF:
            return "bg-blue-100 text-blue-800";
        case Stat.SPD:
            return "bg-purple-100 text-purple-800";
        case Stat.Ability:
            return "bg-amber-100 text-amber-800";
        default:
            return "bg-gray-100 text-gray-800";
    }
}

export default async function CharacterPage({ params }: PageProps) {
    const { characterId } = await params;

    const character = characters.find((c) => c.id === characterId);

    if (!character) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-6">
                <Link href="/characters">
                    <Button variant="ghost" className="pl-0">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Characters
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative aspect-[18/23] rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={character.cosmetic.imageUrl || "/placeholder.svg"}
                        alt={character.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{character.type}</Badge>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-1">{character.name}</h1>
                    <p className="text-xl text-muted-foreground mb-6">{"Title Goes Here"}</p>

                    <div className="flex gap-6 mb-6">
                        <div className="text-center">
                            <div
                                className={`${getStatColor(
                                    Stat.HP
                                )} rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg mb-1`}
                            >
                                {character.stats.HP}
                            </div>
                            <span className="text-sm text-muted-foreground">Health</span>
                        </div>
                        <div className="text-center">
                            <div
                                className={`${getStatColor(
                                    Stat.ATK
                                )} rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg mb-1`}
                            >
                                {character.stats.ATK}
                            </div>
                            <span className="text-sm text-muted-foreground">Attack</span>
                        </div>
                        <div className="text-center">
                            <div
                                className={`${getStatColor(
                                    Stat.DEF
                                )} rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg mb-1`}
                            >
                                {character.stats.DEF}
                            </div>
                            <span className="text-sm text-muted-foreground">Defense</span>
                        </div>
                        <div className="text-center">
                            <div
                                className={`${getStatColor(
                                    Stat.SPD
                                )} rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg mb-1`}
                            >
                                {character.stats.SPD}
                            </div>
                            <span className="text-sm text-muted-foreground">Speed</span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Description</h2>
                        <p className="p-4 bg-slate-100 dark:bg-slate-800 rounded-md">{character.description}</p>
                    </div>

                    <Tabs defaultValue="ability">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="ability">Ability</TabsTrigger>
                            <TabsTrigger value="strategy">Strategy</TabsTrigger>
                        </TabsList>
                        <TabsContent value="ability" className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md mt-2">
                            <h2 className="text-lg md:text-xl font-bold">
                                <StyledDescription text={character.ability.abilityName} />
                            </h2>

                            <div className="text-sm font-mono">
                                <StyledDescription text={character.ability.abilityEffectString} />
                            </div>
                            {character.subAbility && (
                                <>
                                    <h2 className="text-md md:text-lg font-bold pt-2">
                                        <StyledDescription text={character.subAbility.abilityName} />
                                    </h2>
                                    <div className="text-sm font-mono">
                                        <StyledDescription text={character.subAbility.abilityEffectString} />
                                    </div>
                                </>
                            )}
                        </TabsContent>
                        <TabsContent value="strategy" className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md mt-2">
                            <p>{"Card Strategy"}</p>
                        </TabsContent>
                    </Tabs>

                    {character.relatedCharacters && character.relatedCharacters.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-3">Related Characters</h3>
                            <div className="flex flex-wrap gap-2">
                                {character.relatedCharacters.map((relatedId) => {
                                    const relatedCard = characters.find((c) => c.id === relatedId);
                                    if (!relatedCard) return null;

                                    return (
                                        <Link href={`/characters/${relatedId}`} key={relatedId}>
                                            <Card className="w-24 hover:shadow-md transition-shadow">
                                                <div className="relative pt-[130%]">
                                                    <Image
                                                        src={
                                                            relatedCard.cosmetic.imageUrl ||
                                                            "/placeholder.svg" ||
                                                            "/placeholder.svg"
                                                        }
                                                        alt={relatedCard.name}
                                                        fill
                                                        className="object-cover rounded-t-md"
                                                    />
                                                </div>
                                                <CardContent className="p-2">
                                                    <p className="text-xs font-medium truncate">{relatedCard.name}</p>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    <div className="mt-6">
                        <Link href={`/wiki/characters/${character.id}`}>
                            <Button variant="outline" className="w-full">
                                <BookOpen className="mr-2 h-4 w-4" /> View Wiki Entry
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Character's Deck Section */}
            {character.cards && character.cards.length > 0 && (
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Scroll className="h-6 w-6 text-emerald-600" />
                        {character.name}'s Deck
                    </h2>

                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-6">
                        <div className="flex justify-between pb-2">
                            <div className="text-sm text-muted-foreground">
                                Total Cards: {character.cards.reduce((acc, item) => acc + item.count, 0)}
                            </div>
                            <div className="text-sm text-muted-foreground">Unique Cards: {character.cards.length}</div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {character.cards.map((item, index) => (
                                <CardPreview key={index} card={item.card} count={item.count} showCount />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
