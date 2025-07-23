"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    Menu,
    WalletCardsIcon as Cards,
    ScrollText,
    X,
    Users,
    Newspaper,
    Edit,
    Library,
    BrainCircuit,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { useSession } from "next-auth/react";

const navItems = [
    { name: "Home", href: "/", icon: <Home className="h-5 w-5" /> },
    { name: "Cards", href: "/cards", icon: <Cards className="h-5 w-5" /> },
    { name: "Characters", href: "/characters", icon: <Users className="h-5 w-5" /> },
    { name: "Mechanics", href: "/mechanics", icon: <ScrollText className="h-5 w-5" /> },
    { name: "Strategies", href: "/strategies", icon: <BrainCircuit className="h-5 w-5" /> },
    { name: "Wiki", href: "/wiki", icon: <Library className="h-5 w-5" /> },
    { name: "News", href: "/news", icon: <Newspaper className="h-5 w-5" /> },
    { name: "Contribute", href: "/contribute", icon: <Edit className="h-5 w-5" /> },
];

export function Navbar() {
    const pathname = usePathname();
    const currentPath = `/${pathname.split("/")[1]}`;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { data: session } = useSession();

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <nav className="bg-background/80 backdrop-blur-lg border-b border-border/20 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo and brand */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
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
                                        "flex items-center gap-2 rounded-full transition-all",
                                        currentPath === item.href
                                            ? "bg-primary/10 text-primary"
                                            : "text-muted-foreground hover:text-foreground"
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
                            className="rounded-full"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Animated Mobile menu */}
            <div
                className={cn(
                    "md:hidden border-t border-border/20 bg-background/95 backdrop-blur-xl transition-all duration-300 ease-in-out overflow-hidden",
                    mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="container mx-auto px-4 py-4 space-y-2">
                    {navItems.map((item) => (
                        <Link key={`mobile-${item.href}`} href={item.href}>
                            <Button
                                variant="ghost"
                                className={cn(
                                    "w-full justify-start gap-3 py-6 text-base",
                                    currentPath === item.href
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {item.icon}
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
