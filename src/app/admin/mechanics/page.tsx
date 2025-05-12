import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { isAuthorizedAdmin } from "@/config/admin";
import { prisma } from "@/lib/prisma";
import { MechanicsApprovalList } from "@/components/admin/mechanics-approval-list";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function AdminMechanicsPage() {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        redirect("/auth/signin?callbackUrl=/admin/mechanics");
    }

    if (!isAuthorizedAdmin(session.user.discordId)) {
        redirect("/unauthorized");
    }

    // Fetch pending mechanics
    const pendingMechanics = await prisma.mechanic.findMany({
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

    // Fetch published mechanics
    const publishedMechanics = await prisma.mechanic.findMany({
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
                    <h1 className="text-2xl font-bold">Mechanics Management</h1>
                    <p className="text-muted-foreground">Review and manage game mechanics submissions</p>
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
                        {pendingMechanics.length > 0 && (
                            <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                                {pendingMechanics.length}
                            </span>
                        )}
                    </TabsTrigger>
                    <TabsTrigger value="published">Recently Published</TabsTrigger>
                </TabsList>
                <TabsContent value="pending" className="mt-6">
                    {pendingMechanics.length === 0 ? (
                        <Card>
                            <CardContent className="pt-6 text-center">
                                <p className="text-muted-foreground">No pending mechanics to review.</p>
                            </CardContent>
                        </Card>
                    ) : (
                        <MechanicsApprovalList mechanics={pendingMechanics} />
                    )}
                </TabsContent>
                <TabsContent value="published" className="mt-6">
                    {publishedMechanics.length === 0 ? (
                        <Card>
                            <CardContent className="pt-6 text-center">
                                <p className="text-muted-foreground">No published mechanics found.</p>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="space-y-6">
                            {publishedMechanics.map((mechanic) => (
                                <Card key={mechanic.id}>
                                    <CardHeader>
                                        <CardTitle>{mechanic.title}</CardTitle>
                                        <CardDescription>
                                            Published by{" "}
                                            {mechanic.author.name || mechanic.author.discordTag || "Unknown"}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{mechanic.description}</p>
                                        <div className="mt-4 flex justify-end">
                                            <Link href={`/mechanics/${mechanic.slug}`} target="_blank">
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
