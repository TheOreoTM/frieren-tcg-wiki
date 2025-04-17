import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Flame, Shield, Sparkles, Swords, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getMechanicData, type Mechanic } from "@/lib/mechanics";
import type { JSX } from "react";
import MarkdownContent from "@/components/markdown-content";
import Image from "next/image";

interface PageProps {
    params: Promise<{ slug: string }>;
}

const mechanicIcons: Record<string, JSX.Element> = {
    empower: <Sparkles className="h-8 w-8 text-blue-500" />,
    combat: <Swords className="h-6 w-6 text-red-500" />,
};

export default async function MechanicPage({ params }: PageProps) {
    const { slug } = await params;

    const mechanic = getMechanicData(slug);

    if (!mechanic) {
        notFound();
    }

    if (!mechanic.overview) {
        notFound();
    }

    const mechanicIcon = mechanicIcons[slug];
    const rulesTabDisabled = !mechanic.rules;
    const examplesTabDisabled = !mechanic.examples;

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-6">
                <Link href="/mechanics">
                    <Button variant="ghost" className="pl-0">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Mechanics
                    </Button>
                </Link>
            </div>

            <div className="flex items-center gap-3 mb-6">
                {mechanicIcon}
                <h1 className="text-3xl md:text-4xl font-bold">{mechanic.overview.name}</h1>
            </div>

            <p className="text-xl text-muted-foreground mb-8">{mechanic.overview.description}</p>

            <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger disabled={rulesTabDisabled} value="rules">
                        Rules
                    </TabsTrigger>
                    <TabsTrigger disabled={examplesTabDisabled} value="examples">
                        Examples
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="p-6 bg-slate-50 dark:bg-slate-900 rounded-md mt-4">
                    <MarkdownContent content={mechanic.overview.content} />
                    <AuthorCredits mechanic={mechanic.overview} />
                </TabsContent>
                <TabsContent value="rules" className="p-6 bg-slate-50 dark:bg-slate-900 rounded-md mt-4">
                    {mechanic.rules && <MarkdownContent content={mechanic.rules.content} />}
                    {!mechanic.rules && <p>No rules found</p>}
                    <AuthorCredits mechanic={mechanic.overview} />
                </TabsContent>
                <TabsContent value="examples" className="p-6 bg-slate-50 dark:bg-slate-900 rounded-md mt-4">
                    {mechanic.examples && <MarkdownContent content={mechanic.examples.content} />}
                    {!mechanic.examples && <p>No examples found</p>}
                    <AuthorCredits mechanic={mechanic.overview} />
                </TabsContent>
            </Tabs>

            <div className="mt-12 flex justify-between">
                <Link href={`/wiki/mechanics/${slug}`}>
                    <Button variant="outline">
                        <BookOpen className="mr-2 h-4 w-4" /> Detailed Wiki Entry
                    </Button>
                </Link>
                <Link href="/wiki/rulebook">
                    <Button variant="secondary">View Full Rulebook</Button>
                </Link>
            </div>
        </div>
    );
}

function AuthorCredits({ mechanic }: { mechanic: Mechanic }) {
    return (
        <div className="flex items-center justify-between py-3 px-4 bg-gradient-to-r from-accent/50 to-secondary/40 rounded-md">
            <div className="flex items-center gap-2">
                <Image
                    src={mechanic.authorAvatar || "/assets/default-pfp.png"}
                    alt={mechanic.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <p className="text-sm text-muted-foreground">{mechanic.author}</p>
            </div>
            <p>
                <Link
                    href={`https://github.com/TheoreOtm/frieren-tcg-wiki/tree/main/src/content/mechanics/${mechanic.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted-foreground"
                >
                    Edit this page on GitHub
                </Link>
            </p>
        </div>
    );
}
