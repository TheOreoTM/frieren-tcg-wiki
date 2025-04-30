import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { ErrorHandler } from "@/components/error-handler";

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
    },
    twitter: {
        card: "summary_large_image",
        title: "Frieren TCG - Trading Card Game",
        description: "The fan-made trading card game inspired by the anime Frieren: Beyond Journey's End",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen">
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
                <Analytics />
                <SpeedInsights />
                <Toaster richColors position="top-center" />
                <ErrorHandler />
            </body>
        </html>
    );
}
