import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { isAuthorizedAdmin } from "@/config/admin";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);

    if (!session?.user || !isAuthorizedAdmin(session.user.discordId)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json({ error: "Content ID is required" }, { status: 400 });
        }

        await prisma.news.delete({
            where: { id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error rejecting news article:", error);
        return NextResponse.json({ error: "Failed to reject news article" }, { status: 500 });
    }
}
