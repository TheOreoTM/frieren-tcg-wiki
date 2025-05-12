import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { isAuthorizedAdmin } from "@/config/admin";
import { prisma } from "@/lib/prisma";
import { NewsApprovalList } from "@/components/admin/news-approval-list";

export default async function AdminNewsPage() {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        redirect("/auth/signin?callbackUrl=/admin/news");
    }

    if (!isAuthorizedAdmin(session.user.discordId)) {
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
                    discordTag: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">News Article Approval</h1>
                <p className="text-muted-foreground">Review and approve submitted news articles for publication.</p>
            </div>

            <NewsApprovalList news={pendingNews} />
        </div>
    );
}
