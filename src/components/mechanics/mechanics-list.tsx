"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getMechanicIcon } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface Mechanic {
    title: string;
    slug: string;
    description: string;
    icon: string;
}

interface MechanicsListProps {
    mechanics: Mechanic[];
}

export function MechanicsList({ mechanics }: MechanicsListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mechanics.map((mechanic) => {
                const MechanicIcon = getMechanicIcon(mechanic.icon);

                return (
                    <Link key={mechanic.slug} href={`/mechanics/${mechanic.slug}`} className="block">
                        <Card className="group h-full glass-card hover:shadow-xl transition-all duration-300 overflow-hidden border-border/20 hover:border-primary/30 hover:scale-[1.02]">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                                            <MechanicIcon className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                                            {mechanic.title}
                                        </CardTitle>
                                    </div>
                                    {/* Arrow icon as a visual cue for clicking */}
                                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="leading-relaxed line-clamp-3">
                                    {mechanic.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                );
            })}
        </div>
    );
}
