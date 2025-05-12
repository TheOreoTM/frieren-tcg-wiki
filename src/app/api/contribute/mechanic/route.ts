import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import slugify from "slugify";
import { z } from "zod";

const mechanicSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(10),
    icon: z.string(),
    overview: z.string().min(50),
    rules: z.string().min(50),
    examples: z.string().min(50),
    authorId: z.string(),
});

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const validatedData = mechanicSchema.parse(body);

        const slug = slugify(validatedData.title, {
            lower: true,
            strict: true,
        });

        const existing = await prisma.mechanic.findFirst({
            where: {
                slug: slug,
            },
        });

        if (existing) {
            return NextResponse.json({ error: "Slug is already taken" }, { status: 400 });
        }

        const mechanic = await prisma.mechanic.create({
            data: {
                title: validatedData.title,
                slug: slug,
                description: validatedData.description,
                icon: validatedData.icon,
                overview: validatedData.overview,
                rules: validatedData.rules,
                examples: validatedData.examples,
                authorId: session.user.id,
                published: false,
            },
        });

        return NextResponse.json({ success: true, mechanic }, { status: 201 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.errors }, { status: 400 });
        }

        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
