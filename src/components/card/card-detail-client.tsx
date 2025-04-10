"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tag } from "@/components/tag";
import { CardEmpowerCalculator } from "@/components/card/card-empower-calculator";
import { CardMap } from "@/data/cards";
import { notFound } from "next/navigation";

type Props = {
    cardId: string;
};

export function CardDetailClient({ cardId }: Props) {
    const card = CardMap.get(cardId);

    if (!card) return notFound();
    const [empowerLevel, setEmpowerLevel] = useState(5);
    const imageSource = card.getImageSource();
    const hasEmpowerEffects = card.effects.length > 0;

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-6">
                <Link href="/cards">
                    <Button variant="ghost" className="pl-0">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cards
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                    <Image src={imageSource} alt={card.title} fill className="object-cover" />
                </div>

                <div>
                    {card.priority > 0 && (
                        <Badge variant="outline" className="bg-amber-50 mb-2">
                            Priority +{card.priority}
                        </Badge>
                    )}

                    <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
                        {card.title} {hasEmpowerEffects ? `+ ${empowerLevel}` : ""}
                    </h1>

                    <div className="mb-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-md">
                        <h2 className="text-lg font-semibold mb-2">Effect</h2>
                        <p>{card.getDescription(empowerLevel)}</p>
                    </div>

                    {Object.keys(card.tags).length > 0 && (
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-2">Tags</h2>
                            <div className="flex flex-wrap gap-2">
                                {Object.entries(card.tags).map(([tag, value]) => (
                                    <Tag tag={tag} key={tag}>
                                        {tag}: {value}
                                    </Tag>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Empower</h2>
                        {hasEmpowerEffects && (
                            <>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                                    {[1, 3].map((level) => (
                                        <div key={level} className="p-3 bg-slate-50 dark:bg-slate-900 rounded-md">
                                            <div className="text-sm text-muted-foreground mb-1">Level {level}</div>
                                            <div className="font-mono text-sm">
                                                {card.effects.map((effect, index) => {
                                                    const empowered = effect * (1 + level * card.EMPOWER_BOOST);
                                                    return (
                                                        <div key={index}>
                                                            {effect.toFixed(2)} → {empowered.toFixed(2)}{" "}
                                                            {card.effectNames[index]}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <CardEmpowerCalculator
                                    empowerLevel={empowerLevel}
                                    effects={card.effects}
                                    effectNames={card.effectNames}
                                    EMPOWER_BOOST={card.EMPOWER_BOOST}
                                    onLevelChange={setEmpowerLevel}
                                />
                            </>
                        )}
                        {!hasEmpowerEffects && (
                            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-md text-muted-foreground">
                                Empower has no effect on this card
                            </div>
                        )}
                    </div>

                    <div className="mt-6">
                        <Link href="/cards">
                            <Button variant="outline" className="w-full">
                                View All Cards
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
