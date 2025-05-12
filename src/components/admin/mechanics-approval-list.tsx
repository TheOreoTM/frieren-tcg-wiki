"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import MarkdownContent from "@/components/markdown-content";
import type { Mechanic } from "@/lib/types/content";
import { getMechanicIcon } from "@/lib/utils";

interface MechanicsApprovalListProps {
    mechanics: Mechanic[];
}

export function MechanicsApprovalList({ mechanics }: MechanicsApprovalListProps) {
    const router = useRouter();
    const [pendingMechanics, setPendingMechanics] = useState<Mechanic[]>(mechanics);
    const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});
    const [activeTab, setActiveTab] = useState<Record<string, string>>({});

    const handleApprove = async (id: string) => {
        setIsLoading((prev) => ({ ...prev, [id]: true }));

        try {
            const response = await fetch(`/api/admin/mechanics/approve`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error("Failed to approve mechanic");
            }

            setPendingMechanics((prev) => prev.filter((item) => item.id !== id));
            toast.success("Mechanic approved successfully");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Failed to approve mechanic");
        } finally {
            setIsLoading((prev) => ({ ...prev, [id]: false }));
        }
    };

    const handleReject = async (id: string) => {
        setIsLoading((prev) => ({ ...prev, [id]: true }));

        try {
            const response = await fetch(`/api/admin/mechanics/reject`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error("Failed to reject mechanic");
            }

            setPendingMechanics((prev) => prev.filter((item) => item.id !== id));
            toast.success("Mechanic rejected successfully");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Failed to reject mechanic");
        } finally {
            setIsLoading((prev) => ({ ...prev, [id]: false }));
        }
    };

    if (pendingMechanics.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-muted-foreground">No pending mechanics to review.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {pendingMechanics.map((mechanic) => {
                const MechanicIcon = getMechanicIcon(mechanic.icon);

                return (
                    <Card key={mechanic.id} className="overflow-hidden">
                        <CardHeader className="pb-0">
                            <div className="flex justify-between items-start">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <MechanicIcon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{mechanic.title}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            By {mechanic.author.name || "Unknown"} •{" "}
                                            {formatDistanceToNow(new Date(mechanic.createdAt), { addSuffix: true })}
                                        </p>
                                        <p className="text-sm mt-1">{mechanic.description}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <Button
                                        variant="outline"
                                        onClick={() => handleReject(mechanic.id)}
                                        disabled={isLoading[mechanic.id]}
                                    >
                                        Reject
                                    </Button>
                                    <Button
                                        onClick={() => handleApprove(mechanic.id)}
                                        disabled={isLoading[mechanic.id]}
                                    >
                                        Approve
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <Tabs
                                defaultValue="overview"
                                value={activeTab[mechanic.id] || "overview"}
                                onValueChange={(value) => setActiveTab((prev) => ({ ...prev, [mechanic.id]: value }))}
                            >
                                <TabsList className="mb-4">
                                    <TabsTrigger value="overview">Overview</TabsTrigger>
                                    <TabsTrigger value="rules">Rules</TabsTrigger>
                                    <TabsTrigger value="examples">Examples</TabsTrigger>
                                </TabsList>
                                <TabsContent value="overview">
                                    <div className="border rounded-md p-4 overflow-auto max-h-[300px]">
                                        {activeTab[mechanic.id] === "overview" && (
                                            <MarkdownContent content={mechanic.overview} />
                                        )}
                                    </div>
                                </TabsContent>
                                <TabsContent value="rules">
                                    <div className="border rounded-md p-4 overflow-auto max-h-[300px]">
                                        {activeTab[mechanic.id] === "rules" && (
                                            <MarkdownContent content={mechanic.rules} />
                                        )}
                                    </div>
                                </TabsContent>
                                <TabsContent value="examples">
                                    <div className="border rounded-md p-4 overflow-auto max-h-[300px]">
                                        {activeTab[mechanic.id] === "examples" && (
                                            <MarkdownContent content={mechanic.examples} />
                                        )}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}
