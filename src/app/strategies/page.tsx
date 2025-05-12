import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getAllStrategies } from "@/lib/content/strategies";

export default async function StrategiesPage() {
    const strategies = await getAllStrategies();

    return (
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-8">
            <h1 className="text-3xl font-bold mb-6">Strategy Guides</h1>
            <p className="text-muted-foreground mb-8">
                Learn advanced strategies and tactics for Frieren TCG from the community.
            </p>

            <div className="grid grid-cols-1 gap-6">
                {strategies.map((guide) => (
                    <Link key={guide.id} href={`/strategies/${guide.slug}`}>
                        <Card className="hover:shadow-md transition-shadow cursor-pointer">
                            <CardHeader>
                                <CardTitle>{guide.title}</CardTitle>
                                <CardDescription>
                                    {formatDistanceToNow(new Date(guide.createdAt), { addSuffix: true })} by{" "}
                                    {guide.author.name || "Anonymous"}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {guide.characterId && (
                                    <div className="mb-4">
                                        <Badge variant="outline">Character: {guide.characterId}</Badge>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {guide.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}

                {strategies.length === 0 && (
                    <Card>
                        <CardContent className="py-8 text-center">
                            <p className="text-muted-foreground">No strategy guides available yet.</p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
