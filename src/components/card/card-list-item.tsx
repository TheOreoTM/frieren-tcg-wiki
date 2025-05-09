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
        <Link href={`/cards/${cardId}`} className="p-0.5">
            <div className="flex items-center p-4 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                <div className="flex-grow mr-4">
                    <div className="flex items-center gap-1 mb-1">
                        <div className="flex items-center">
                            <h3 className="font-bold pr-1">{card.title} </h3>
                        </div>
                        {card.deck && card.deck !== CharacterID.Default && (
                            <Badge variant="secondary" className="text-xs">
                                {characterName}
                            </Badge>
                        )}
                        {showSepertor && <Dot />}
                        {count !== undefined && showCount && (
                            <Badge variant="outline" className="bg-slate-100">
                                ×{count}
                            </Badge>
                        )}
                        {card.priority > 0 && (
                            <Badge variant="outline" className="bg-amber-50">
                                Priority +{card.priority}
                            </Badge>
                        )}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

                    {Object.keys(card.tags || {}).length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                            {Object.entries(card.tags || {}).map(([tag, value]) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}: {value}
                                </Badge>
                            ))}
                        </div>
                    )}
                </div>
                <div className="text-2xl flex-shrink-0">
                    <Image src={card.emoji} alt={card.title} width={40} height={40} />
                </div>
            </div>
        </Link>
    );
}
