// app/cards/[cardId]/page.tsx
import { notFound } from "next/navigation";
import { CardMap } from "@/data/cards";
import { CardDetailClient } from "@/components/card/card-detail-client";
import type { Metadata, ResolvingMetadata } from "next";

type PageProps = {
    params: Promise<{ cardId: string }>;
};

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
    const { cardId } = await params;

    const card = CardMap.get(cardId);

    if (!card) {
        return {
            title: "Card Not Found",
            description: "The requested card could not be found",
        };
    }

    const description =
        typeof card.getDescription === "function"
            ? card.getDescription()
            : card.description(card.effects.map((e) => e.toString()));

    return {
        title: `${card.title} | Frieren TCG`,
        description: description || `Learn about the ${card.title} card in Frieren TCG`,
        openGraph: {
            title: card.title,
            description: description,
            images: [
                {
                    url: card.cosmetic?.cardImageUrl || card.cosmetic?.cardGif || "/placeholder.svg",
                    width: 800,
                    height: 1000,
                    alt: card.title,
                },
            ],
        },
    };
}

export default async function CardDetailPage({ params }: PageProps) {
    const { cardId } = await params;
    const card = CardMap.get(cardId);

    if (!card) notFound();

    return <CardDetailClient cardId={cardId} />;
}
