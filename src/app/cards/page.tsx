import type { Metadata } from "next";
import CardsClientPage from "./CardsClientPage";

export const metadata: Metadata = {
    title: "Cards | Frieren TCG",
    description: "Browse all cards in the Frieren Trading Card Game collection",
    openGraph: {
        title: "Frieren TCG Cards Collection",
        description: "Explore all cards from the Frieren Trading Card Game",
    },
};

export default function CardsPage() {
    return <CardsClientPage />;
}
