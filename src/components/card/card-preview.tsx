import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Card as CardType } from "@/lib/classes/Card";

interface CardPreviewProps {
    card: CardType;
    count?: number;
    showCount?: boolean;
}

export default function CardPreview({ card, count, showCount }: CardPreviewProps) {
    const imageSource = card.emoji;
    const isSignature = card.cardMetadata?.signature;

    return (
        <Link href={`/cards/${card.getId()}`} className="block">
            <Card
                className={`group hover:shadow-xl transition-all duration-300 overflow-hidden h-full glass-card border-border/20 hover:border-primary/30 hover:scale-[1.02] ${
                    isSignature ? "border-2 border-signature/50 glow-effect" : ""
                }`}
            >
                <div className="relative aspect-[18/23] overflow-hidden">
                    <Image
                        src={imageSource || "/placeholder.svg"}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Improved count badge */}
                    {count !== undefined && showCount && (
                        <div className="absolute top-3 right-3 bg-background/90 dark:bg-background/95 backdrop-blur-sm border border-border/20 text-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold text-xs shadow-lg">
                            <span className="text-primary">×{count}</span>
                        </div>
                    )}

                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-90" />

                    {/* Card title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3
                            className={`font-bold text-lg leading-tight transition-colors ${
                                isSignature ? "text-signature" : "text-foreground group-hover:text-primary"
                            }`}
                        >
                            {card.title}
                        </h3>
                    </div>
                </div>

                <CardContent className="pt-4 pb-4">
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {typeof card.getDescription === "function"
                            ? card.getDescription()
                            : card.description(card.effects.map((e: any) => e.toString()))}
                    </p>

                    {/* Optional: Add card metadata */}
                    {(card.priority > 0 || card.hpCost !== undefined) && (
                        <div className="flex gap-1 mt-3 flex-wrap">
                            {card.priority > 0 && (
                                <Badge
                                    variant="outline"
                                    className="text-xs bg-accent/10 text-accent-foreground border-accent/20"
                                >
                                    Priority +{card.priority}
                                </Badge>
                            )}
                            {card.hpCost !== undefined && card.hpCost > 0 && (
                                <Badge
                                    variant="outline"
                                    className="text-xs bg-primary/10 text-primary border-primary/20"
                                >
                                    {card.hpCost} HP
                                </Badge>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </Link>
    );
}
