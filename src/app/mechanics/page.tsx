import { getAllMechanics } from "@/lib/content/mechanics";
import { MechanicsList } from "@/components/mechanics/mechanics-list";

export default async function MechanicsPage() {
    const mechanics = await getAllMechanics();

    const mechanicsData = mechanics.map((mechanic) => ({
        name: mechanic.name,
        slug: mechanic.slug,
        description: mechanic.description,
        icon: mechanic.icon,
    }));

    return (
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-8">
            <h1 className="text-3xl font-bold mb-6">Game Mechanics</h1>
            <p className="text-muted-foreground mb-8">
                Learn about the core mechanics that make up the Frieren TCG gameplay system.
            </p>

            <MechanicsList mechanics={mechanicsData} />
        </div>
    );
}
