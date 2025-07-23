import { getAllMechanics } from "@/lib/content/mechanics";
import { MechanicsList } from "@/components/mechanics/mechanics-list";
import { ScrollText } from "lucide-react";

export default async function MechanicsPage() {
    const mechanics = await getAllMechanics();

    const mechanicsData = mechanics.map((mechanic) => ({
        title: mechanic.title,
        slug: mechanic.slug,
        description: mechanic.description,
        icon: mechanic.icon,
    }));

    return (
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 py-12">
            {/* Enhanced Header Section */}
            <div className="text-center mb-12">
                <div className="inline-block rounded-full bg-primary/10 p-4 mb-6 border border-primary/20 shadow-inner">
                    <ScrollText className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Game Mechanics</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Learn about the core rules, keywords, and systems that form the foundation of the Frieren TCG.
                </p>
            </div>

            {/* The list will inherit the new theme */}
            <MechanicsList mechanics={mechanicsData} />
        </div>
    );
}
