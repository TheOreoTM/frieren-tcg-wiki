"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Home, Menu, WalletCardsIcon as Cards, ScrollText, X, Users, Newspaper, Swords } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

const navItems = [
    {
        name: "Home",
        href: "/",
        icon: <Home className="h-5 w-5" />,
    },
    {
        name: "Cards",
        href: "/cards",
        icon: <Cards className="h-5 w-5" />,
    },
    {
        name: "Characters",
        href: "/characters",
        icon: <Users className="h-5 w-5" />,
    },
    {
        name: "Mechanics",
        href: "/mechanics",
        icon: <ScrollText className="h-5 w-5" />,
    },
    {
        name: "Combat",
        href: "/combat",
        icon: <Swords className="h-5 w-5" />,
    },
    {
        name: "Wiki",
        href: "/wiki",
        icon: <BookOpen className="h-5 w-5" />,
    },
    {
        name: "News",
        href: "/news",
        icon: <Newspaper className="h-5 w-5" />,
    },
];

export function Navbar() {
    const pathname = usePathname();
    const currentPath = `/${pathname.split("/")[1]}`;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-background border-b sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo and brand */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="font-bold text-xl gradient-text">Frieren TCG</span>
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-1">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href}>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "flex items-center gap-2",
                                        currentPath === item.href && "bg-accent text-accent-foreground"
                                    )}
                                >
                                    {item.icon}
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                        <ModeToggle />
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t">
                    <div className="container mx-auto px-4 py-3 space-y-4">
                        {" "}
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "w-full justify-start gap-2",
                                        currentPath === item.href && "bg-accent text-accent-foreground"
                                    )}
                                >
                                    {item.icon}
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
