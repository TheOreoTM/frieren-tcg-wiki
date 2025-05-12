"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import MarkdownContent from "@/components/markdown-content";

type NewsItem = {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    tags: string[];
    createdAt: Date;
    author: {
        name: string | null;
        image: string | null;
        discordTag: string | null;
    };
};

interface NewsApprovalListProps {
    news: NewsItem[];
}

export function NewsApprovalList({ news }: NewsApprovalListProps) {
    const router = useRouter();
    const [pendingNews, setPendingNews] = useState<NewsItem[]>(news);
    const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});

    const handleApprove = async (id: string) => {
        setIsLoading((prev) => ({ ...prev, [id]: true }));

        try {
            const response = await fetch(`/api/admin/news/approve`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error("Failed to approve news article");
            }

            setPendingNews((prev) => prev.filter((item) => item.id !== id));
            toast.success("News article approved successfully");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Failed to approve news article");
        } finally {
            setIsLoading((prev) => ({ ...prev, [id]: false }));
        }
    };

    const handleReject = async (id: string) => {
        setIsLoading((prev) => ({ ...prev, [id]: true }));

        try {
            const response = await fetch(`/api/admin/news/reject`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error("Failed to reject news article");
            }

            setPendingNews((prev) => prev.filter((item) => item.id !== id));
            toast.success("News article rejected successfully");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Failed to reject news article");
        } finally {
            setIsLoading((prev) => ({ ...prev, [id]: false }));
        }
    };

    if (pendingNews.length === 0) {
        return (
            <Card>
                <CardContent className="pt-6 text-center">
                    <p className="text-muted-foreground">No pending news articles to review.</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="space-y-6">
            {pendingNews.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle>{item.title}</CardTitle>
                                <CardDescription>
                                    Submitted by {item.author.name || item.author.discordTag}{" "}
                                    {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
                                </CardDescription>
                            </div>
                            <div className="flex space-x-2">
                                <Button
                                    variant="outline"
                                    onClick={() => handleReject(item.id)}
                                    disabled={isLoading[item.id]}
                                >
                                    Reject
                                </Button>
                                <Button onClick={() => handleApprove(item.id)} disabled={isLoading[item.id]}>
                                    Approve
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="preview">
                            <TabsList className="mb-4">
                                <TabsTrigger value="preview">Preview</TabsTrigger>
                                <TabsTrigger value="raw">Raw Content</TabsTrigger>
                            </TabsList>
                            <TabsContent value="preview">
                                <div className="prose dark:prose-invert max-w-none">
                                    <h2 className="text-xl font-bold">{item.title}</h2>
                                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                                    <MarkdownContent content={item.content} />
                                </div>
                            </TabsContent>
                            <TabsContent value="raw">
                                <div className="bg-muted p-4 rounded-md overflow-auto max-h-96">
                                    <pre className="text-sm">{item.content}</pre>
                                </div>
                            </TabsContent>
                        </Tabs>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {item.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
