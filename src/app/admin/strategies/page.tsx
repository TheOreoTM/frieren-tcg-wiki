import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { isAuthorizedAdmin } from "@/config/admin";
import { prisma } from "@/lib/prisma";
import { StrategiesApprovalList } from "@/components/admin/strategies-approval-list";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function AdminStrategiesPage() {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        redirect("/auth/signin?callbackUrl=/admin/strategies");
    }

    if (!isAuthorizedAdmin(session.user.discordId)) {
        redirect("/unauthorized");
    }

    // Fetch pending strategies
    const pendingStrategies = await prisma.strategyGuide.findMany({
        where: {
            published: false,
        },
        include: {
            author: {
                select: {
                    name: true,
                    image: true,
                    discordTag: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    // Fetch published strategies
    const publishedStrategies = await prisma.strategyGuide.findMany({
        where: {
            published: true,
        },
        include: {
            author: {
                select: {
                    name: true,
                    image: true,
                    discordTag: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
        take: 10,
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Strategy Guides Management</h1>
                    <p className="text-muted-foreground">Review and manage strategy guide submissions</p>
                </div>
                <Link href="/admin">
                    <Button variant="outline" size="sm">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Dashboard
                    </Button>
                </Link>
            </div>

            <Tabs defaultValue="pending" className="w-full">
                <TabsList>
                    <TabsTrigger value="pending">
                        Pending Approval
                        {pendingStrategies.length > 0 && (
                            <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                                {pendingStrategies.length}
                            </span>
                        )}
                    </TabsTrigger>
                    <TabsTrigger value="published">Recently Published</TabsTrigger>
                </TabsList>
                <TabsContent value="pending" className="mt-6">
                    {pendingStrategies.length === 0 ? (
                        <Card>
                            <CardContent className="pt-6 text-center">
                                <p className="text-muted-foreground">No pending strategy guides to review.</p>
                            </CardContent>
                        </Card>
                    ) : (
                        <StrategiesApprovalList strategies={pendingStrategies} />
                    )}
                </TabsContent>
                <TabsContent value="published" className="mt-6">
                    {publishedStrategies.length === 0 ? (
                        <Card>
                            <CardContent className="pt-6 text-center">
                                <p className="text-muted-foreground">No published strategy guides found.</p>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="space-y-6">
                            {publishedStrategies.map((strategy) => (
                                <Card key={strategy.id}>
                                    <CardHeader>
                                        <CardTitle>{strategy.title}</CardTitle>
                                        <CardDescription>
                                            Published by{" "}
                                            {strategy.author.name || strategy.author.discordTag || "Unknown"}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        {strategy.characterId && (
                                            <p className="text-sm text-muted-foreground mb-2">
                                                Character: {strategy.characterId}
                                            </p>
                                        )}
                                        <div className="mt-4 flex justify-end">
                                            <Link href={`/strategies/${strategy.slug}`} target="_blank">
                                                <Button variant="outline" size="sm">
                                                    View
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    );
}
