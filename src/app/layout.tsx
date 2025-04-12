import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | Frieren TCG",
        default: "Frieren TCG - Trading Card Game",
    },
    description: "The fan-made trading card game inspired by the anime Frieren: Beyond Journey's End",
    keywords: ["Frieren", "TCG", "trading card game", "anime", "manga"],
    authors: [{ name: "Frieren TCG" }],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://tcg.oreotm.xyz",
        siteName: "Frieren TCG",
        title: "Frieren TCG - Trading Card Game",
        description: "The fan-made trading card game inspired by the anime Frieren: Beyond Journey's End",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Frieren TCG",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Frieren TCG - Trading Card Game",
        description: "The fan-made trading card game inspired by the anime Frieren: Beyond Journey's End",
        images: ["/og-image.jpg"],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="light">
            <body className="min-h-screen">
                <Navbar />
                <main>{children}</main>
                <footer className="py-8 px-4 mt-12 border-t border-primary/10 bg-white/60 backdrop-blur-sm">
                    <div className="container mx-auto text-center">
                        <p className="text-sm text-muted-foreground">Created with ❤️ for Frieren fans</p>
                        <p className="text-xs text-muted-foreground mt-2">
                            A fan-made trading card game inspired by the anime Frieren: Beyond Journey's End
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
