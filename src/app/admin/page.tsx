import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { isAuthorizedAdmin } from "@/config/admin";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Cog, BookOpen, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function AdminDashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        redirect("/auth/signin?callbackUrl=/admin");
    }

    if (!isAuthorizedAdmin(session.user.discordId)) {
        redirect("/unauthorized");
    }

    // Get counts for dashboard
    const [pendingNewsCount, pendingMechanicsCount, pendingStrategiesCount, userCount] = await Promise.all([
        prisma.news.count({ where: { published: false } }),
        prisma.mechanic.count({ where: { published: false } }),
        prisma.strategyGuide.count({ where: { published: false } }),
        prisma.user.count(),
    ]);

    const stats = [
        {
            title: "Pending News",
            value: pendingNewsCount,
            description: "News articles awaiting approval",
            icon: Newspaper,
            href: "/admin/news",
            color: "text-blue-500",
        },
        {
            title: "Pending Mechanics",
            value: pendingMechanicsCount,
            description: "Mechanics awaiting approval",
            icon: Cog,
            href: "/admin/mechanics",
            color: "text-amber-500",
        },
        {
            title: "Pending Strategies",
            value: pendingStrategiesCount,
            description: "Strategy guides awaiting approval",
            icon: BookOpen,
            href: "/admin/strategies",
            color: "text-green-500",
        },
        {
            title: "Total Users",
            value: userCount,
            description: "Registered users",
            icon: Users,
            href: "/admin/users",
            color: "text-purple-500",
        },
    ];

    return (
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
                <p className="text-muted-foreground">Manage content and users for the Frieren TCG Wiki.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-lg">{stat.title}</CardTitle>
                                <stat.icon className={cn("h-5 w-5", stat.color)} />
                            </div>
                            <CardDescription>{stat.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold mb-2">{stat.value}</div>
                            <Link href={stat.href}>
                                <Button variant="outline" size="sm">
                                    View Details
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Latest submissions and updates</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* This would be populated with recent activity data */}
                        <p className="text-muted-foreground text-center py-4">Activity feed coming soon</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Common administrative tasks</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <Button className="w-full justify-start" variant="outline">
                                <Newspaper className="mr-2 h-4 w-4" />
                                Create News Article
                            </Button>
                            <Button className="w-full justify-start" variant="outline">
                                <Cog className="mr-2 h-4 w-4" />
                                Add New Mechanic
                            </Button>
                            <Button className="w-full justify-start" variant="outline">
                                <BookOpen className="mr-2 h-4 w-4" />
                                Create Strategy Guide
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
