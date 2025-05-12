"use client";

import type React from "react";
import type { ContentItem, ContentType, Mechanic, NewsArticle, StrategyGuide } from "@/lib/types/content";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import MarkdownContent from "@/components/markdown-content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ContentApprovalListProps {
    items: ContentItem[];
    contentType: ContentType;
    renderPreview: (item: ContentItem) => React.ReactNode;
}

export function ContentApprovalList({ items, contentType, renderPreview }: ContentApprovalListProps) {
    const router = useRouter();
    const [pendingItems, setPendingItems] = useState<ContentItem[]>(items);
    const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});
    const [activeTab, setActiveTab] = useState<Record<string, string>>({});

    const handleApprove = async (id: string) => {
        setIsLoading((prev) => ({ ...prev, [id]: true }));

        try {
            const response = await fetch(`/api/admin/${contentType}/approve`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error(`Failed to approve ${contentType.slice(0, -1)}`);
            }

            setPendingItems((prev) => prev.filter((item) => item.id !== id));
            toast.success(
                `${
                    contentType.slice(0, -1).charAt(0).toUpperCase() + contentType.slice(0, -1).slice(1)
                } approved successfully`
            );
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error(`Failed to approve ${contentType.slice(0, -1)}`);
        } finally {
            setIsLoading((prev) => ({ ...prev, [id]: false }));
        }
    };

    const handleReject = async (id: string) => {
        setIsLoading((prev) => ({ ...prev, [id]: true }));

        try {
            const response = await fetch(`/api/admin/${contentType}/reject`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error(`Failed to reject ${contentType.slice(0, -1)}`);
            }

            setPendingItems((prev) => prev.filter((item) => item.id !== id));
            toast.success(
                `${
                    contentType.slice(0, -1).charAt(0).toUpperCase() + contentType.slice(0, -1).slice(1)
                } rejected successfully`
            );
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error(`Failed to reject ${contentType.slice(0, -1)}`);
        } finally {
            setIsLoading((prev) => ({ ...prev, [id]: false }));
        }
    };

    if (pendingItems.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-muted-foreground">No pending items to review.</p>
            </div>
        );
    }

    const getItemTitle = (item: ContentItem) => {
        if (contentType === "news" || contentType === "strategies") {
            return item.title;
        } else if (contentType === "mechanics") {
            return (item as Mechanic).title;
        }
        return "Untitled";
    };

    const getItemDescription = (item: ContentItem) => {
        if (contentType === "news") {
            return (item as NewsArticle).excerpt;
        } else if (contentType === "mechanics") {
            return (item as Mechanic).description;
        } else if (contentType === "strategies") {
            return `Strategy guide for ${(item as StrategyGuide).characterId || "general play"}`;
        }
        return "";
    };

    const getItemContent = (item: ContentItem) => {
        if (contentType === "news") {
            return (item as NewsArticle).content;
        } else if (contentType === "mechanics") {
            const mechanic = item as Mechanic;
            return `# Overview\n\n${mechanic.overview}\n\n# Rules\n\n${mechanic.rules}\n\n# Examples\n\n${mechanic.examples}`;
        } else if (contentType === "strategies") {
            return (item as StrategyGuide).content;
        }
        return "";
    };

    return (
        <div className="space-y-6">
            {pendingItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                    <CardHeader className="pb-0">
                        <div className="flex justify-between items-start">
                            <div className="flex items-start gap-4">
                                <Avatar>
                                    <AvatarImage src={item.author.image || ""} alt={item.author.name || "User"} />
                                    <AvatarFallback>{(item.author.name || "U").charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="text-lg font-semibold">{getItemTitle(item)}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        By {item.author.name || "Unknown"} •{" "}
                                        {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
                                    </p>
                                    <p className="text-sm mt-1">{getItemDescription(item)}</p>
                                </div>
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
                    <CardContent className="pt-4">
                        <Tabs
                            defaultValue="preview"
                            value={activeTab[item.id] || "preview"}
                            onValueChange={(value) => setActiveTab((prev) => ({ ...prev, [item.id]: value }))}
                        >
                            <TabsList className="mb-4">
                                <TabsTrigger value="preview">Preview</TabsTrigger>
                                <TabsTrigger value="raw">Raw Content</TabsTrigger>
                            </TabsList>
                            <TabsContent value="preview">
                                <div className="border rounded-md p-4 overflow-auto max-h-[500px]">
                                    {activeTab[item.id] === "preview" && (
                                        <MarkdownContent content={getItemContent(item)} />
                                    )}
                                </div>
                            </TabsContent>
                            <TabsContent value="raw">
                                <div className="bg-muted p-4 rounded-md overflow-auto max-h-[500px]">
                                    <pre className="text-sm whitespace-pre-wrap">{getItemContent(item)}</pre>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
