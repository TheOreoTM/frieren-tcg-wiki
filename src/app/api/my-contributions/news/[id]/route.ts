import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { id } = params;
        const { title, slug, excerpt, content, tags } = await request.json();

        // Check if the article exists and belongs to the user
        const article = await prisma.news.findUnique({
            where: {
                id,
                authorId: session.user.id,
                published: false, // Only allow editing unpublished articles
            },
        });

        if (!article) {
            return NextResponse.json({ error: "Article not found or cannot be edited" }, { status: 404 });
        }

        // Check if the slug is already taken (excluding the current article)
        const existingArticle = await prisma.news.findFirst({
            where: {
                slug,
                id: { not: id },
            },
        });

        if (existingArticle) {
            return NextResponse.json({ error: "Slug is already taken" }, { status: 400 });
        }

        // Update the article
        const updatedArticle = await prisma.news.update({
            where: { id },
            data: {
                title,
                slug,
                excerpt,
                content,
                tags,
            },
        });

        return NextResponse.json({ success: true, article: updatedArticle });
    } catch (error) {
        console.error("Error updating news article:", error);
        return NextResponse.json({ error: "Failed to update news article" }, { status: 500 });
    }
}
