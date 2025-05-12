"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentApprovalList } from "./content-approval-list";
import type { ContentItem, ContentType, NewsArticle, Mechanic, StrategyGuide } from "@/lib/types/content";

interface ContentApprovalDashboardProps {
    news: NewsArticle[];
    mechanics: Mechanic[];
    strategies: StrategyGuide[];
}

export function ContentApprovalDashboard({ news, mechanics, strategies }: ContentApprovalDashboardProps) {
    const [activeTab, setActiveTab] = useState<ContentType>("news");

    const renderPreview = (item: ContentItem) => {
        // This is a placeholder for custom preview rendering
        // I can implement specific preview logic for each content type
        return null;
    };

    return (
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ContentType)}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="news" className="relative">
                    News
                    {news.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {news.length}
                        </span>
                    )}
                </TabsTrigger>
                <TabsTrigger value="mechanics" className="relative">
                    Mechanics
                    {mechanics.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {mechanics.length}
                        </span>
                    )}
                </TabsTrigger>
                <TabsTrigger value="strategies" className="relative">
                    Strategies
                    {strategies.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {strategies.length}
                        </span>
                    )}
                </TabsTrigger>
            </TabsList>

            <TabsContent value="news">
                <ContentApprovalList items={news} contentType="news" renderPreview={renderPreview} />
            </TabsContent>

            <TabsContent value="mechanics">
                <ContentApprovalList items={mechanics} contentType="mechanics" renderPreview={renderPreview} />
            </TabsContent>

            <TabsContent value="strategies">
                <ContentApprovalList items={strategies} contentType="strategies" renderPreview={renderPreview} />
            </TabsContent>
        </Tabs>
    );
}
