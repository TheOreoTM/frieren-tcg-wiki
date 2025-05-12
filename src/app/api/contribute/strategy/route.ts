import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import slugify from "slugify";

const strategySchema = z.object({
    title: z.string().min(5),
    characterId: z.string().optional(),
    content: z.string().min(100),
    tags: z.array(z.string()).min(1),
    authorId: z.string(),
});

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const validatedData = strategySchema.parse(body);

        const slug = slugify(validatedData.title, {
            lower: true,
            strict: true,
        });

        const existing = await prisma.strategyGuide.findFirst({
            where: {
                slug: slug,
            },
        });

        if (existing) {
            return NextResponse.json({ error: "Slug is already taken" }, { status: 400 });
        }

        const strategy = await prisma.strategyGuide.create({
            data: {
                title: validatedData.title,
                slug: slug,
                characterId: validatedData.characterId || null,
                content: validatedData.content,
                tags: validatedData.tags,
                authorId: session.user.id,
                published: false,
            },
        });

        return NextResponse.json({ success: true, strategy }, { status: 201 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.errors }, { status: 400 });
        }

        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
