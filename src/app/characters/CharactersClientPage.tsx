"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, Users, Sword, Shield, Wind, Heart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Characters } from "@/data/characters";
import { Stat } from "@/lib/enums";

const characters = Array.from(Characters.values());

const SEPERATOR = "[#]";

function getStatBadgeTheme(stat: Stat) {
    const baseClasses = "text-xs font-bold border backdrop-blur-sm shadow-lg py-1 px-2.5 rounded-full";
    switch (stat) {
        case Stat.HP:
            return `${baseClasses} bg-primary/90 text-primary-foreground border-primary/50`;
        case Stat.ATK:
            return `${baseClasses} bg-accent/90 text-accent-foreground border-accent/50`;
        case Stat.DEF:
            return `${baseClasses} bg-secondary/90 text-secondary-foreground border-secondary/50`;
        case Stat.SPD:
            return `${baseClasses} bg-muted/80 text-muted-foreground border-border`;
        default:
            return `${baseClasses} bg-muted/80 text-muted-foreground border-border`;
    }
}

function getStatCircleTheme(stat: Stat) {
    const baseClasses = "rounded-full h-10 w-10 flex items-center justify-center font-bold text-sm border-2";
    switch (stat) {
        case Stat.HP:
            return `${baseClasses} bg-primary/20 text-primary border-primary/30`;
        case Stat.ATK:
            return `${baseClasses} bg-accent/20 text-accent border-accent/30`;
        case Stat.DEF:
            return `${baseClasses} bg-secondary/20 text-secondary border-secondary/30`;
        case Stat.SPD:
            return `${baseClasses} bg-muted/25 text-muted-foreground border-muted-foreground/30`;
        default:
            return `${baseClasses} bg-muted/20 text-muted-foreground border-border/30`;
    }
}

export default function CharactersClientPage() {
    const [search, setSearch] = useState("");

    const filteredCharacters = characters.filter((character) => {
        const searchable =
            `${character.name}${SEPERATOR}${character.id}${SEPERATOR}${character.description}${SEPERATOR}${character.title}`.toLowerCase();

        return (
            search.length === 0 ||
            (search.length > 0 &&
                search
                    .toLowerCase()
                    .split(SEPERATOR)
                    .every((word) => searchable.includes(word)))
        );
    });

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="inline-block rounded-full bg-primary/10 p-4 mb-6 border border-primary/20 shadow-inner">
                    <Users className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Character Collection</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Discover the heroes and legends of the Frieren universe, each with unique abilities and stories.
                </p>
            </div>

            {/* Search Section */}
            <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        placeholder="Search characters by name, description, or abilities..."
                        className="pl-10 bg-background/50 border-border/30 focus:border-primary/50 focus:ring-primary/20 transition-all"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {search && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 hover:bg-muted/20"
                            onClick={() => setSearch("")}
                            aria-label="Clear search"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    )}
                </div>

                {/* Search Results Counter */}
                {search !== "" && (
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                            Found <span className="font-medium text-foreground">{filteredCharacters.length}</span> of{" "}
                            <span className="font-medium text-foreground">{characters.length}</span> characters
                        </span>
                    </div>
                )}
            </div>

            {/* Characters Grid */}
            {filteredCharacters.length === 0 ? (
                <div className="text-center py-16 glass-card border-border/20 rounded-2xl">
                    <div className="max-w-md mx-auto space-y-4">
                        <div className="w-16 h-16 mx-auto bg-muted/20 rounded-full flex items-center justify-center">
                            <Users className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">No Characters Found</h3>
                        <p className="text-muted-foreground">
                            Try adjusting your search terms to find the character you're looking for.
                        </p>
                        <Button
                            onClick={() => setSearch("")}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
                        >
                            Show All Characters
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {filteredCharacters.map((character) => (
                        <Link href={`/characters/${character.id}`} key={character.id} className="block">
                            <Card className="group glass-card hover:shadow-xl transition-all duration-300 h-full overflow-hidden border-border/20 hover:border-primary/30 hover:scale-[1.02]">
                                <div className="relative pt-[150%] overflow-hidden">
                                    <Image
                                        src={character.cosmetic.icon || "/placeholder.svg"}
                                        alt={character.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />

                                    <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                                        {" "}
                                        {/* Added z-10 to ensure badges are on top */}
                                        <Badge
                                            className={`inline-flex items-center gap-1 ${getStatBadgeTheme(Stat.HP)}`}
                                        >
                                            <Heart className="h-3 w-3" /> HP {character.stats.HP}
                                        </Badge>
                                        <Badge
                                            className={`inline-flex items-center gap-1 ${getStatBadgeTheme(Stat.ATK)}`}
                                        >
                                            <Sword className="h-3 w-3" /> ATK {character.stats.ATK}
                                        </Badge>
                                        <Badge
                                            className={`inline-flex items-center gap-1 ${getStatBadgeTheme(Stat.DEF)}`}
                                        >
                                            <Shield className="h-3 w-3" /> DEF {character.stats.DEF}
                                        </Badge>
                                        <Badge
                                            className={`inline-flex items-center gap-1 ${getStatBadgeTheme(Stat.SPD)}`}
                                        >
                                            <Wind className="h-3 w-3" /> SPD {character.stats.SPD}
                                        </Badge>
                                    </div>

                                    {/* Theme-aware gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-90" />

                                    {/* Character name overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-foreground font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                                            {character.name}
                                        </h3>
                                        {character.title && (
                                            <p className="text-sm text-muted-foreground mt-1 opacity-90">
                                                {character.title}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <CardContent className="pt-4 pb-3">
                                    {/* Quick stat display with icons */}
                                    {/* <div className="flex justify-center gap-3 mb-3">
                                        <div
                                            title="Attack"
                                            className={`rounded-full h-10 w-10 flex items-center justify-center ${getStatCircleTheme(
                                                Stat.ATK
                                            )}`}
                                        >
                                            <Sword className="w-5 h-5" />
                                        </div>
                                        <div
                                            title="Defense"
                                            className={`rounded-full h-10 w-10 flex items-center justify-center ${getStatCircleTheme(
                                                Stat.DEF
                                            )}`}
                                        >
                                            <Shield className="w-5 h-5" />
                                        </div>
                                        <div
                                            title="Speed"
                                            className={`rounded-full h-10 w-10 flex items-center justify-center ${getStatCircleTheme(
                                                Stat.SPD
                                            )}`}
                                        >
                                            <Wind className="w-5 h-5" />
                                        </div>
                                    </div> */}

                                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed text-center">
                                        {character.description}
                                    </p>
                                </CardContent>

                                <CardFooter className="pt-2 pb-4 border-t border-border/10">
                                    <div className="w-full text-center">
                                        <Badge
                                            variant="outline"
                                            className="text-xs bg-muted/10 text-muted-foreground border-muted-foreground/20"
                                        >
                                            {character.id}
                                        </Badge>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
