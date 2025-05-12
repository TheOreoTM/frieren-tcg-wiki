"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Cog, Users, BookOpen, Home, ChevronLeft, ChevronRight, Newspaper, FileText } from "lucide-react";
import { useState } from "react";

export function AdminSidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    const navItems = [
        {
            title: "Dashboard",
            href: "/admin",
            icon: Home,
        },
        {
            title: "Content Management",
            href: "/admin/content",
            icon: FileText,
        },
        {
            title: "News Articles",
            href: "/admin/news",
            icon: Newspaper,
        },
        {
            title: "Mechanics",
            href: "/admin/mechanics",
            icon: Cog,
        },
        {
            title: "Strategy Guides",
            href: "/admin/strategies",
            icon: BookOpen,
        },
        {
            title: "Users",
            href: "/admin/users",
            icon: Users,
        },
    ];

    return (
        <div
            className={cn(
                "bg-card border-r h-screen sticky top-0 transition-all duration-300 flex flex-col",
                collapsed ? "w-16" : "w-64"
            )}
        >
            <div className="p-4 border-b flex items-center justify-between">
                {!collapsed && <h2 className="font-bold text-lg">Admin Panel</h2>}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setCollapsed(!collapsed)}
                    className={cn("ml-auto", collapsed && "mx-auto")}
                >
                    {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </Button>
            </div>

            <nav className="flex-1 py-4">
                <ul className="space-y-1 px-2">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href}>
                                <Button
                                    variant={pathname === item.href ? "secondary" : "ghost"}
                                    className={cn("w-full justify-start", collapsed && "justify-center px-2")}
                                >
                                    <item.icon size={18} className={cn("mr-2", collapsed && "mr-0")} />
                                    {!collapsed && <span>{item.title}</span>}
                                </Button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-4 border-t">
                <Link href="/">
                    <Button
                        variant="outline"
                        className={cn("w-full justify-start", collapsed && "justify-center px-2")}
                    >
                        <Home size={18} className={cn("mr-2", collapsed && "mr-0")} />
                        {!collapsed && <span>Back to Site</span>}
                    </Button>
                </Link>
            </div>
        </div>
    );
}
