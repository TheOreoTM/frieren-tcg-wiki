// app/cards/[cardId]/page.tsx
import { notFound } from "next/navigation";
import { CardMap } from "@/data/cards";
import { CardDetailClient } from "@/components/card/card-detail-client";

type PageProps = {
    params: { cardId: string };
};

export default async function CardDetailPage({ params }: PageProps) {
    const { cardId } = await params;
    const card = CardMap.get(cardId);

    if (!card) notFound();

    return <CardDetailClient cardId={cardId} />;
}
