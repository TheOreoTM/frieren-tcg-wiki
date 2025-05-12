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

        const updatedMechanic = await prisma.mechanic.update({
            where: { id },
            data: { published: true },
        });

        return NextResponse.json({ success: true, mechanic: updatedMechanic });
    } catch (error) {
        console.error("Error approving mechanic:", error);
        return NextResponse.json({ error: "Failed to approve mechanic" }, { status: 500 });
    }
}
