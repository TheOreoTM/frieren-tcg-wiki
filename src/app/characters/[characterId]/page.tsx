import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Scroll, Heart, Sword, Shield, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Characters } from "@/data/characters";
import { CharacterIdToName, Stat, type CharacterID, type CharacterName } from "@/lib/enums";
import StyledText from "@/components/styled-text";
import CardPreview from "@/components/card/card-preview";
import type { Metadata, ResolvingMetadata } from "next";

interface PageProps {
    params: Promise<{ characterId: string }>;
}

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
    const { characterId } = await params;
    const character = Characters.get(CharacterIdToName[characterId as CharacterID]);

    if (!character) {
        return {
            title: "Character Not Found",
            description: "The requested character could not be found",
        };
    }

    return {
        title: `${character.name}`,
        description: `"${character.title}"\n\n${character.description}`,
        openGraph: {
            title: character.name,
            description: `"${character.title}"\n\n${character.description}`,
            images: [
                {
                    url: character.cosmetic.imageUrl || character.cosmetic.icon || "/placeholder.svg",
                    alt: character.name,
                },
            ],
        },
    };
}

// Theme-aware function for stat displays
function getStatTheme(stat: Stat) {
    switch (stat) {
        case Stat.HP:
            return "text-primary";
        case Stat.ATK:
            return "text-accent";
        case Stat.DEF:
            return "text";
        case Stat.SPD:
            return "text-muted-foreground";
        default:
            return "text-foreground";
    }
}

export default async function CharacterPage({ params }: PageProps) {
    const { characterId } = await params;
    const character = Characters.get(CharacterIdToName[characterId as CharacterID]);

    if (!character) {
        notFound();
    }

    const allCharacters = Array.from(Characters.values());

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-8">
                <Link href="/characters">
                    <Button variant="ghost" className="pl-0 text-muted-foreground hover:text-primary">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Character Collection
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: Character Image */}
                <div className="md:col-span-1">
                    <div className="relative aspect-[18/23] rounded-xl overflow-hidden shadow-xl glass-card">
                        <Image
                            src={character.cosmetic.imageUrl || "/placeholder.svg"}
                            alt={character.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Column: Character Info */}
                <div className="md:col-span-2 space-y-8">
                    {/* Header */}
                    <div className="space-y-2">
                        <Badge
                            variant="secondary"
                            className="bg-secondary/20 text-secondary-foreground border-secondary/30"
                        >
                            {character.type}
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold gradient-text">{character.name}</h1>
                        <p className="text-xl text-muted-foreground">{character.title}</p>
                    </div>

                    {/* Beautiful Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[Stat.HP, Stat.ATK, Stat.DEF, Stat.SPD].map((stat) => (
                            <div
                                key={stat}
                                className="glass-card p-4 rounded-lg text-center space-y-2 border-border/20"
                            >
                                <div className={`inline-flex p-2 rounded-full bg-background/50 ${getStatTheme(stat)}`}>
                                    {stat === Stat.HP && <Heart className="h-6 w-6" />}
                                    {stat === Stat.ATK && <Sword className="h-6 w-6" />}
                                    {stat === Stat.DEF && <Shield className="h-6 w-6" />}
                                    {stat === Stat.SPD && <Wind className="h-6 w-6" />}
                                </div>
                                <p className={`text-2xl font-bold ${getStatTheme(stat)}`}>{character.stats[stat]}</p>
                                <p className="text-sm text-muted-foreground capitalize">{stat.toLowerCase()}</p>
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    <div className="glass-card p-6 rounded-xl border-border/20">
                        <h2 className="text-lg font-semibold mb-2">Description</h2>
                        <p className="leading-relaxed text-muted-foreground">{character.description}</p>
                    </div>

                    {/* Abilities & Lore Tabs */}
                    <Tabs defaultValue="ability">
                        <TabsList className="grid w-full grid-cols-3 bg-muted/20 p-1 rounded-lg border border-border/20 h-auto">
                            <TabsTrigger value="ability">Ability</TabsTrigger>
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="strategy">Strategy</TabsTrigger>
                        </TabsList>
                        <TabsContent value="ability" className="glass-card mt-4 p-6 rounded-xl border-border/20">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-bold text-primary">
                                        <StyledText text={character.ability.abilityName} />
                                    </h3>
                                    <div className="text-sm text-muted-foreground leading-relaxed">
                                        <StyledText text={character.ability.abilityEffectString} />
                                    </div>
                                </div>
                                {character.subAbilities?.map((subAbility, i) => (
                                    <div key={i}>
                                        <h4 className="font-semibold text-foreground">
                                            <StyledText text={subAbility.abilityName} />
                                        </h4>
                                        <div className="text-sm text-muted-foreground leading-relaxed">
                                            <StyledText text={subAbility.abilityEffectString} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="overview" className="glass-card mt-4 p-6 rounded-xl border-border/20">
                            {character.overview ? (
                                <StyledText text={character.overview} />
                            ) : (
                                <p className="text-muted-foreground">
                                    No overview available. You can contribute on{" "}
                                    <a
                                        className="font-semibold text-primary hover:underline"
                                        href={`https://github.com/TheOreoTM/frieren-tcg-wiki/tree/main/src/data/characters/${character.id}.ts`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                    .
                                </p>
                            )}
                        </TabsContent>
                        <TabsContent value="strategy" className="glass-card mt-4 p-6 rounded-xl border-border/20">
                            <p className="text-muted-foreground">Strategy guides for this character are coming soon.</p>
                        </TabsContent>
                    </Tabs>

                    {/* Related Characters */}
                    {character.relatedCharacters && character.relatedCharacters.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Related Characters</h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                                {character.relatedCharacters.map((relatedId) => {
                                    const relatedChar = allCharacters.find((c) => c.id === relatedId);
                                    if (!relatedChar) return null;
                                    return (
                                        <Link href={`/characters/${relatedId}`} key={relatedId} className="block group">
                                            <Card className="glass-card hover:shadow-lg transition-all duration-300 overflow-hidden border-border/20 hover:border-primary/30">
                                                <div className="relative aspect-[18/23]">
                                                    <Image
                                                        src={relatedChar.cosmetic.icon || "/placeholder.svg"}
                                                        alt={relatedChar.name}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform"
                                                    />
                                                </div>
                                                <CardContent className="p-2 text-center">
                                                    <p className="text-xs font-medium truncate group-hover:text-primary transition-colors">
                                                        {relatedChar.name}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Character's Deck Section */}
            {character.cards && character.cards.length > 0 && (
                <div className="mt-16 cozy-section">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Scroll className="h-6 w-6 text-primary" />
                        {character.name}'s Deck
                    </h2>
                    <div className="flex justify-between items-center mb-6 text-sm text-muted-foreground">
                        <div>
                            Total Cards:{" "}
                            <span className="font-bold text-foreground">
                                {character.cards.reduce((acc, item) => acc + item.count, 0)}
                            </span>
                        </div>
                        <div>
                            Unique Cards: <span className="font-bold text-foreground">{character.cards.length}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {character.cards.map((item, index) => (
                            <CardPreview key={index} card={item.card} count={item.count} showCount />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
