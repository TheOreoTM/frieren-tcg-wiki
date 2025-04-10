import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Card as CardType } from "@/lib/classes/Card";

interface CardPreviewProps {
    card: CardType;
    count?: number;
    showCount?: boolean;
}

export default function CardPreview({ card, count, showCount }: CardPreviewProps) {
    const imageSource = card.getImageSource();

    return (
        <Link href={`/cards/${card.getId()}`}>
            <Card className="hover:shadow-lg transition-shadow overflow-hidden h-full">
                <div className="relative aspect-[18/23]">
                    <Image src={imageSource || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
                    {count !== undefined && showCount && (
                        <div className="absolute top-2 right-2 bg-black/70 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
                            ×{count}
                        </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className="text-white font-bold text-lg">{card.title}</h3>
                    </div>
                </div>
                <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {typeof card.getDescription === "function"
                            ? card.getDescription()
                            : card.description(card.effects.map((e: any) => e.toString()))}
                    </p>
                </CardContent>
                {/* <CardFooter className="flex justify-between items-center pt-2 pb-3 border-t">
          {card.priority > 0 && (
            <Badge variant="outline" className="bg-amber-50">
              Priority +{card.priority}
            </Badge>
          )}
          <div className="text-xl">{card.getDescription()}</div>
        </CardFooter> */}
            </Card>
        </Link>
    );
}
