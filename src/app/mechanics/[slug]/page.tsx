import { notFound } from "next/navigation";
import MarkdownContent from "@/components/markdown-content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getMechanicBySlug, getAllMechanics } from "@/lib/content/mechanics";
import { getMechanicIcon } from "@/lib/utils";

export async function generateStaticParams() {
    const mechanics = await getAllMechanics();

    return mechanics.map((mechanic) => ({
        slug: mechanic.slug,
    }));
}

export default async function MechanicPage({ params }: { params: { slug: string } }) {
    const mechanic = await getMechanicBySlug(params.slug);

    if (!mechanic) {
        notFound();
    }

    const MechanicIcon = getMechanicIcon(mechanic.icon);

    return (
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-8">
            <Card className="mb-8">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                            <MechanicIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl">{mechanic.name}</CardTitle>
                            <CardDescription>{mechanic.description}</CardDescription>
                        </div>
                    </div>
                </CardHeader>
            </Card>

            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="rules">Rules</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                    <Card>
                        <CardContent className="pt-6">
                            <MarkdownContent content={mechanic.overview} />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="rules">
                    <Card>
                        <CardContent className="pt-6">
                            <MarkdownContent content={mechanic.rules} />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="examples">
                    <Card>
                        <CardContent className="pt-6">
                            <MarkdownContent content={mechanic.examples} />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <div className="mt-8 text-sm text-muted-foreground">
                Contributed by {mechanic.author.name || "Anonymous"}
            </div>
        </div>
    );
}
