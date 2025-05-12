import type React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { isAuthorizedAdmin } from "@/config/admin";
import { AdminSidebar } from "@/components/admin/admin-sidebar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        redirect("/auth/signin?callbackUrl=/admin");
    }

    if (!isAuthorizedAdmin(session.user.discordId)) {
        redirect("/unauthorized");
    }

    return (
        <div className="flex min-h-screen">
            <AdminSidebar />
            <div className="flex-1">{children}</div>
        </div>
    );
}
