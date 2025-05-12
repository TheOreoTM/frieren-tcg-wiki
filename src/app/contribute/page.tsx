"use client";

import { useSession } from "next-auth/react";
import { redirect, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NewsArticleForm } from "@/components/contribute/news-article-form";
import { MechanicForm } from "@/components/contribute/mechanic-form";
import { StrategyGuideForm } from "@/components/contribute/strategy-guide-form";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function ContributePage() {
    const { data: session, status } = useSession();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState("news");

    useEffect(() => {
        const type = searchParams.get("type");
        if (type && ["news", "mechanic", "strategy"].includes(type)) {
            setActiveTab(type);
        }
    }, [searchParams]);

    if (status === "loading") {
        return (
            <div className="container flex items-center justify-center min-h-[60vh]">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    if (status === "unauthenticated") {
        redirect("/auth/signin?callbackUrl=/contribute");
    }

    return (
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-8">
            <h1 className="text-3xl font-bold mb-6">Contribute to Frieren TCG Wiki</h1>

            <div className="mb-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Welcome, {session?.user?.name}!</CardTitle>
                        <CardDescription>Choose what type of content you'd like to contribute</CardDescription>
                    </CardHeader>
                </Card>
            </div>

            <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="news">News Article</TabsTrigger>
                    <TabsTrigger value="mechanic">Game Mechanic</TabsTrigger>
                    <TabsTrigger value="strategy">Strategy Guide</TabsTrigger>
                </TabsList>

                <TabsContent value="news" className="mt-6">
                    <NewsArticleForm />
                </TabsContent>

                <TabsContent value="mechanic" className="mt-6">
                    <MechanicForm />
                </TabsContent>

                <TabsContent value="strategy" className="mt-6">
                    <StrategyGuideForm />
                </TabsContent>
            </Tabs>
        </div>
    );
}
