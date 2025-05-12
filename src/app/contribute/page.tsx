"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NewsArticleForm } from "@/components/contribute/news-article-form";
import { MechanicForm } from "@/components/contribute/mechanic-form";
import { StrategyGuideForm } from "@/components/contribute/strategy-guide-form";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContributePage() {
    const { data: session, status } = useSession();

    if (status === "unauthenticated") {
        redirect("/auth/signin");
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Contribute to Frieren TCG Wiki</h1>

            <div className="mb-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Welcome, {session?.user?.name}!</CardTitle>
                        <CardDescription>Choose what type of content you'd like to contribute</CardDescription>
                    </CardHeader>
                </Card>
            </div>

            <Tabs defaultValue="news">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="news">News Article</TabsTrigger>
                    <TabsTrigger value="mechanic">Game Mechanic</TabsTrigger>
                    <TabsTrigger value="strategy">Strategy Guide</TabsTrigger>
                </TabsList>

                <TabsContent value="news">
                    <NewsArticleForm />
                </TabsContent>

                <TabsContent value="mechanic">
                    <MechanicForm />
                </TabsContent>

                <TabsContent value="strategy">
                    <StrategyGuideForm />
                </TabsContent>
            </Tabs>
        </div>
    );
}
