"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getMechanicIcon } from "@/lib/utils";

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
                    <Link key={mechanic.slug} href={`/mechanics/${mechanic.slug}`}>
                        <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <MechanicIcon className="h-5 w-5 text-primary" />
                                    </div>
                                    <CardTitle>{mechanic.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{mechanic.description}</CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                );
            })}
        </div>
    );
}
