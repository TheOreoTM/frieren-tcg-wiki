import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { isAuthorizedAdmin } from "@/config/admin";
import { prisma } from "@/lib/prisma";
import { ContentApprovalDashboard } from "@/components/admin/content-approval-dashboard";

export default async function ContentManagementPage() {
    const session = await getServerSession(authOptions);

    if (!session?.user || !isAuthorizedAdmin(session.user.discordId)) {
        redirect("/unauthorized");
    }

    // Fetch pending news articles
    const pendingNews = await prisma.news.findMany({
        where: {
            published: false,
        },
        include: {
            author: {
                select: {
                    name: true,
                    image: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

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
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    // Fetch pending strategy guides
    const pendingStrategies = await prisma.strategyGuide.findMany({
        where: {
            published: false,
        },
        include: {
            author: {
                select: {
                    name: true,
                    image: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Content Management</h1>
            <p className="text-muted-foreground mb-8">Review and approve user-submitted content.</p>

            <ContentApprovalDashboard news={pendingNews} mechanics={pendingMechanics} strategies={pendingStrategies} />
        </div>
    );
}
