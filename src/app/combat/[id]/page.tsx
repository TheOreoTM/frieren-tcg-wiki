import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getCombatStrategyById } from "@/lib/combat";
import MarkdownContent from "@/components/markdown-content";
import { formatDate } from "@/lib/utils";
import { Characters } from "@/data/characters";
import type { CharacterName } from "@/lib/enums";
import type { Metadata, ResolvingMetadata } from "next";

type PageProps = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
    const { id } = await params;
    const strategy = getCombatStrategyById(id);

    if (!strategy) {
        return {
            title: "Strategy Not Found",
            description: "The requested combat strategy could not be found",
        };
    }

    return {
        title: `${strategy.title} | Combat Strategy`,
        description: `Combat strategy for ${strategy.character} in Frieren TCG`,
        openGraph: {
            title: strategy.title,
            description: `Combat strategy for ${strategy.character} in Frieren TCG`,
            type: "article",
            authors: [strategy.author],
            tags: strategy.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: strategy.title,
            description: `Combat strategy for ${strategy.character} in Frieren TCG`,
        },
    };
}

export default async function CombatStrategyPage({ params }: PageProps) {
    const { id } = await params;
    const strategy = getCombatStrategyById(id);

    if (!strategy) {
        notFound();
    }

    const character = Array.from(Characters.values()).find((c) => c.name === (strategy.character as CharacterName));

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-6">
                <Link href="/combat">
                    <Button variant="ghost" className="pl-0">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Combat Strategies
                    </Button>
                </Link>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <Badge className="bg-emerald-100 text-emerald-800 mb-2">{strategy.character}</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{strategy.title}</h1>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(strategy.date)}
                        </div>
                        <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {strategy.author}
                        </div>
                    </div>
                </div>

                {character && (
                    <div className="relative aspect-video mb-8">
                        <Image
                            src={character.cosmetic.imageUrl || "/placeholder.svg"}
                            alt={strategy.character}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                )}

                <MarkdownContent content={strategy.content} className="mb-12" />

                <div className="flex flex-wrap gap-2 mb-12">
                    <span className="text-sm font-medium">Tags:</span>
                    {strategy.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Contribute Your Own Strategies</h2>
                    <p className="mb-4">
                        Have a different approach or want to share your own strategy? Learn how to contribute to the
                        wiki!
                    </p>
                    <Link href="/info">
                        <Button variant="outline">Learn How to Contribute</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
