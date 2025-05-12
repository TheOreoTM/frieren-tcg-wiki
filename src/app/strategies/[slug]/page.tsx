import { notFound, redirect } from "next/navigation";
import MarkdownContent from "@/components/markdown-content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { getStrategyBySlug, getAllStrategies } from "@/lib/content/strategies";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";

export async function generateStaticParams() {
    const strategies = await getAllStrategies();

    return strategies.map((guide) => ({
        slug: guide.slug,
    }));
}

export default async function StrategyGuidePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const guide = await getStrategyBySlug(slug);

    if (!guide) {
        return redirect("/strategies?error=StrategyNotFound");
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-6">
                <Link href="/strategies">
                    <Button variant="ghost" className="pl-0">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Combat Strategies
                    </Button>
                </Link>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <Badge className="bg-emerald-100 text-emerald-800 mb-2">{guide.characterId}</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{guide.title}</h1>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDistanceToNow(guide.createdAt)}
                        </div>
                        <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {guide.author.name}
                        </div>
                    </div>
                </div>

                <MarkdownContent content={guide.content} className="mb-12" />

                <div className="flex flex-wrap gap-2 mb-12">
                    <span className="text-sm font-medium">Tags:</span>
                    {guide.tags.map((tag: string) => (
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
