import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getAllStrategies } from "@/lib/content/strategies";
import { BrainCircuit, ArrowRight, User, Calendar } from "lucide-react";
import { Characters } from "@/data/characters";
import type { CharacterName } from "@/lib/enums";

export default async function StrategiesPage() {
    const strategies = await getAllStrategies();

    return (
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 py-12">
            {/* Enhanced Header Section */}
            <div className="text-center mb-12">
                <div className="inline-block rounded-full bg-primary/10 p-4 mb-6 border border-primary/20 shadow-inner">
                    <BrainCircuit className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Strategy Guides</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Learn advanced strategies, deck-building techniques, and character-specific tactics from the
                    community.
                </p>
            </div>

            {/* Strategy Guides List */}
            <div className="space-y-6">
                {strategies.map((guide) => {
                    const characterName = guide.characterId
                        ? Characters.get(guide.characterId as CharacterName)?.name
                        : null;

                    return (
                        <Link key={guide.id} href={`/strategies/${guide.slug}`} className="block">
                            <div className="group glass-card p-6 rounded-2xl border-border/20 hover:border-primary/30 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex justify-between items-center">
                                <div className="flex-grow space-y-4">
                                    {/* Title and Metadata */}
                                    <div>
                                        <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {guide.title}
                                        </h2>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                                            <div className="flex items-center gap-1.5">
                                                <User className="h-3.5 w-3.5" />
                                                <span>{guide.author.name || "Anonymous"}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="h-3.5 w-3.5" />
                                                <span>
                                                    {formatDistanceToNow(new Date(guide.createdAt), {
                                                        addSuffix: true,
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tags and Character */}
                                    <div className="flex flex-wrap items-center gap-2">
                                        {characterName && (
                                            <Badge
                                                variant="outline"
                                                className="bg-primary/10 text-primary border-primary/20 font-medium"
                                            >
                                                Character: {characterName}
                                            </Badge>
                                        )}
                                        {guide.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                                className="bg-secondary/10 text-secondary-foreground border-secondary/20"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Cue */}
                                <div className="ml-6">
                                    <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
                                </div>
                            </div>
                        </Link>
                    );
                })}

                {/* Empty State */}
                {strategies.length === 0 && (
                    <div className="text-center py-16 glass-card border-border/20 rounded-2xl">
                        <div className="max-w-md mx-auto space-y-4">
                            <div className="w-16 h-16 mx-auto bg-muted/20 rounded-full flex items-center justify-center">
                                <BrainCircuit className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">No Guides Yet</h3>
                            <p className="text-muted-foreground">
                                Be the first to share your wisdom! Check back soon for new strategy guides.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
