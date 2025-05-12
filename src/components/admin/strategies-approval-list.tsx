"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import MarkdownContent from "@/components/markdown-content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { StrategyGuide } from "@/lib/types/content";

interface StrategiesApprovalListProps {
    strategies: StrategyGuide[];
}

export function StrategiesApprovalList({ strategies }: StrategiesApprovalListProps) {
    const router = useRouter();
    const [pendingStrategies, setPendingStrategies] = useState<StrategyGuide[]>(strategies);
    const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});
    const [activeTab, setActiveTab] = useState<Record<string, string>>({});

    const handleApprove = async (id: string) => {
        setIsLoading((prev) => ({ ...prev, [id]: true }));

        try {
            const response = await fetch(`/api/admin/strategies/approve`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error("Failed to approve strategy guide");
            }

            setPendingStrategies((prev) => prev.filter((item) => item.id !== id));
            toast.success("Strategy guide approved successfully");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Failed to approve strategy guide");
        } finally {
            setIsLoading((prev) => ({ ...prev, [id]: false }));
        }
    };

    const handleReject = async (id: string) => {
        setIsLoading((prev) => ({ ...prev, [id]: true }));

        try {
            const response = await fetch(`/api/admin/strategies/reject`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error("Failed to reject strategy guide");
            }

            setPendingStrategies((prev) => prev.filter((item) => item.id !== id));
            toast.success("Strategy guide rejected successfully");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Failed to reject strategy guide");
        } finally {
            setIsLoading((prev) => ({ ...prev, [id]: false }));
        }
    };

    if (pendingStrategies.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-muted-foreground">No pending strategy guides to review.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {pendingStrategies.map((strategy) => (
                <Card key={strategy.id} className="overflow-hidden">
                    <CardHeader className="pb-0">
                        <div className="flex justify-between items-start">
                            <div className="flex items-start gap-4">
                                <Avatar>
                                    <AvatarImage
                                        src={strategy.author.image || ""}
                                        alt={strategy.author.name || "User"}
                                    />
                                    <AvatarFallback>{(strategy.author.name || "U").charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="text-lg font-semibold">{strategy.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        By {strategy.author.name || "Unknown"} •{" "}
                                        {formatDistanceToNow(new Date(strategy.createdAt), { addSuffix: true })}
                                    </p>
                                    {strategy.characterId && (
                                        <Badge variant="outline" className="mt-2">
                                            Character: {strategy.characterId}
                                        </Badge>
                                    )}
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <Button
                                    variant="outline"
                                    onClick={() => handleReject(strategy.id)}
                                    disabled={isLoading[strategy.id]}
                                >
                                    Reject
                                </Button>
                                <Button onClick={() => handleApprove(strategy.id)} disabled={isLoading[strategy.id]}>
                                    Approve
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                        <Tabs
                            defaultValue="preview"
                            value={activeTab[strategy.id] || "preview"}
                            onValueChange={(value) => setActiveTab((prev) => ({ ...prev, [strategy.id]: value }))}
                        >
                            <TabsList className="mb-4">
                                <TabsTrigger value="preview">Preview</TabsTrigger>
                                <TabsTrigger value="raw">Raw Content</TabsTrigger>
                            </TabsList>
                            <TabsContent value="preview">
                                <div className="border rounded-md p-4 overflow-auto max-h-[300px]">
                                    {activeTab[strategy.id] === "preview" && (
                                        <MarkdownContent content={strategy.content} />
                                    )}
                                </div>
                            </TabsContent>
                            <TabsContent value="raw">
                                <div className="bg-muted p-4 rounded-md overflow-auto max-h-[300px]">
                                    <pre className="text-sm whitespace-pre-wrap">{strategy.content}</pre>
                                </div>
                            </TabsContent>
                        </Tabs>
                        {strategy.tags && strategy.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                                {strategy.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
