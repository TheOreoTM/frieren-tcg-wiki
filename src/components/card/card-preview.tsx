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
        <Link href={`/cards/${card.getId()}`}>
            <Card
                className={`hover:shadow-lg transition-shadow overflow-hidden h-full ${
                    isSignature ? "border-4 border-signature/50 glow-effect" : ""
                }`}
            >
                <div className="relative aspect-[18/23]">
                    <Image src={imageSource || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
                    {count !== undefined && showCount && (
                        <div className="absolute top-2 right-2 bg-black/70 text-white rounded-full h-8 w-8 flex flex-row items-center justify-center font-bold text-xs">
                            <span className="text-lg leading-none">×</span>
                            <span className="text-base leading-none">{count}</span>
                        </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className={`text-white font-bold text-lg ${isSignature ? "text-signature" : ""}`}>
                            {card.title}
                        </h3>
                    </div>
                </div>
                <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {typeof card.getDescription === "function"
                            ? card.getDescription()
                            : card.description(card.effects.map((e: any) => e.toString()))}
                    </p>
                </CardContent>
            </Card>
        </Link>
    );
}
