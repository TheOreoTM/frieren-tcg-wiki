import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Card } from "@/lib/classes/Card";
import Image from "next/image";
import { CharacterID, CharacterIdToName, CharacterName } from "@/lib/enums";
import { Dot } from "lucide-react";

interface CardListItemProps {
    card: Card;
    count?: number;
    showCount?: boolean;
}

export default function CardListItem({ card, count, showCount }: CardListItemProps) {
    const cardId = card.getId ? card.getId() : card.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const characterName = card.deck ? CharacterIdToName[card.deck] : CharacterName.Default;
    const showSepertor =
        card.deck && card.deck !== CharacterID.Default && ((count !== undefined && showCount) || card.priority > 0);
    const description =
        typeof card.getDescription === "function"
            ? card.getDescription()
            : card.description(card.effects.map((e) => e.toString()));

    return (
        <Link href={`/cards/${cardId}`} className="block">
            <div className="group flex items-center p-4 rounded-xl glass-card hover:bg-muted/20 dark:hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] border-border/20 hover:border-primary/20">
                <div className="flex-grow mr-4 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-foreground group-hover:text-secondary-foreground transition-colors">
                            {card.title}
                        </h3>

                        {card.deck && card.deck !== CharacterID.Default && (
                            <Badge
                                variant="secondary"
                                className="text-xs bg-secondary/15 text-secondary-foreground border border-secondary/20 hover:bg-secondary/25 transition-colors"
                            >
                                {characterName}
                            </Badge>
                        )}

                        {showSepertor && <Dot className="text-muted-foreground w-4 h-4" />}

                        {count !== undefined && showCount && (
                            <Badge
                                variant="outline"
                                className="text-xs bg-secondary/15 text-accent-foreground border-primary/30 hover:bg-primary/20 font-semibold"
                            >
                                ×{count}
                            </Badge>
                        )}

                        {card.priority > 0 && (
                            <Badge
                                variant="outline"
                                className="text-xs bg-accent/15 text-accent-foreground border-accent/30 hover:bg-accent/25 font-medium"
                            >
                                Priority +{card.priority}
                            </Badge>
                        )}
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>

                    {Object.keys(card.tags || {}).length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                            {Object.entries(card.tags || {}).map(([tag, value]) => (
                                <Badge
                                    key={tag}
                                    variant="outline"
                                    className="text-xs bg-muted/15 text-muted-foreground border-muted-foreground/20 hover:bg-muted/25 transition-colors"
                                >
                                    {tag}: {value}
                                </Badge>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-lg bg-muted/10 border border-border/20 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                        <Image
                            src={card.emoji}
                            alt={card.title}
                            width={32}
                            height={32}
                            className="opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
}
