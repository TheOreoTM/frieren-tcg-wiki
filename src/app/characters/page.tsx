import type { Metadata } from "next";
import CharactersClientPage from "./CharactersClientPage";

export const metadata: Metadata = {
    title: "Characters | Frieren TCG",
    description: "View the characters in Frieren TCG and their unique abilities",
    keywords: ["Frieren", "characters", "cards", "Fern", "TCG", "trading card game"],
    openGraph: {
        title: "Frieren TCG Characters",
        description: "View the characters in Frieren TCG and their unique abilities",
        images: [
            {
                url: "/og-characters.jpg", // Create this image for social sharing
                width: 1200,
                height: 630,
                alt: "Frieren TCG Characters Collection",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Frieren TCG Characters",
        description: "View the characters in Frieren TCG and their unique abilities",
        images: ["/og-characters.jpg"],
    },
};

export default function CharactersPage() {
    return <CharactersClientPage />;
}
