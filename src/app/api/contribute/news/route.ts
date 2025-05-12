import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const newsSchema = z.object({
    title: z.string().min(5),
    excerpt: z.string().min(10),
    content: z.string().min(50),
    tags: z.array(z.string()).min(1),
    imageUrl: z.string().url().optional().or(z.literal("")),
    authorId: z.string(),
});

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const validatedData = newsSchema.parse(body);

        const slug = validatedData.title
            .toLowerCase()
            .replace(/[^\w\s]/gi, "")
            .replace(/\s+/g, "-");

        const news = await prisma.news.create({
            data: {
                title: validatedData.title,
                slug: `${slug}-${Date.now()}`,
                excerpt: validatedData.excerpt,
                content: validatedData.content,
                tags: validatedData.tags,
                imageUrl: validatedData.imageUrl || null,
                authorId: session.user.id,
                published: false,
            },
        });

        return NextResponse.json({ success: true, news }, { status: 201 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.errors }, { status: 400 });
        }

        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
