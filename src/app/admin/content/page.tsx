import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { isAuthorizedAdmin } from "@/config/admin";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BookOpen, Newspaper, ScrollText } from "lucide-react";

export default async function AdminContentPage() {
    const session = await getServerSession(authOptions);

    if (!session?.user || !isAuthorizedAdmin(session.user.discordId)) {
        redirect("/unauthorized");
    }

    // Fetch counts for each content type
    const [
        pendingNewsCount,
        pendingMechanicsCount,
        pendingStrategiesCount,
        publishedNewsCount,
        publishedMechanicsCount,
        publishedStrategiesCount,
    ] = await Promise.all([
        prisma.news.count({ where: { published: false } }),
        prisma.mechanic.count({ where: { published: false } }),
        prisma.strategyGuide.count({ where: { published: false } }),
        prisma.news.count({ where: { published: true } }),
        prisma.mechanic.count({ where: { published: true } }),
        prisma.strategyGuide.count({ where: { published: true } }),
    ]);

    // Fetch recent activity
    const recentActivity = await prisma.news.findMany({
        where: { published: true },
        select: {
            id: true,
            title: true,
            slug: true,
            createdAt: true,
            author: {
                select: {
                    name: true,
                },
            },
        },
        orderBy: { createdAt: "desc" },
        take: 5,
    });

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Content Management Dashboard</h1>
                <p className="text-muted-foreground">Manage all content submissions and publications</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center">
                            <Newspaper className="mr-2 h-5 w-5 text-primary" />
                            News Articles
                        </CardTitle>
                        <CardDescription>Manage news articles and announcements</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                                <p className="text-3xl font-bold">{pendingNewsCount}</p>
                                <p className="text-sm text-muted-foreground">Pending</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">{publishedNewsCount}</p>
                                <p className="text-sm text-muted-foreground">Published</p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href="/admin/news" className="w-full">
                            <Button variant="outline" className="w-full">
                                Manage News
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center">
                            <ScrollText className="mr-2 h-5 w-5 text-primary" />
                            Game Mechanics
                        </CardTitle>
                        <CardDescription>Manage game mechanics documentation</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                                <p className="text-3xl font-bold">{pendingMechanicsCount}</p>
                                <p className="text-sm text-muted-foreground">Pending</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">{publishedMechanicsCount}</p>
                                <p className="text-sm text-muted-foreground">Published</p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href="/admin/mechanics" className="w-full">
                            <Button variant="outline" className="w-full">
                                Manage Mechanics
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center">
                            <BookOpen className="mr-2 h-5 w-5 text-primary" />
                            Strategy Guides
                        </CardTitle>
                        <CardDescription>Manage strategy guides and tutorials</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                                <p className="text-3xl font-bold">{pendingStrategiesCount}</p>
                                <p className="text-sm text-muted-foreground">Pending</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">{publishedStrategiesCount}</p>
                                <p className="text-sm text-muted-foreground">Published</p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href="/admin/strategies" className="w-full">
                            <Button variant="outline" className="w-full">
                                Manage Strategies
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Recently published content</CardDescription>
                </CardHeader>
                <CardContent>
                    {recentActivity.length > 0 ? (
                        <ul className="space-y-4">
                            {recentActivity.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                                >
                                    <div>
                                        <p className="font-medium">{item.title}</p>
                                        <p className="text-sm text-muted-foreground">
                                            Published by {item.author.name || "Anonymous"} on{" "}
                                            {new Date(item.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <Link href={`/news/${item.slug}`} target="_blank">
                                        <Button variant="ghost" size="sm">
                                            View
                                        </Button>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center text-muted-foreground">No recent activity</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
