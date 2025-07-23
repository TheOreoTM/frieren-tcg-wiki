"use client";

import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { TagInput } from "@/components/ui/tag-input";
import MarkdownContent from "@/components/markdown-content";

const formSchema = z.object({
    title: z.string().min(5, {
        message: "Title must be at least 5 characters.",
    }),
    slug: z
        .string()
        .min(3, {
            message: "Slug must be at least 3 characters.",
        })
        .regex(/^[a-z0-9-]+$/, {
            message: "Slug can only contain lowercase letters, numbers, and hyphens.",
        }),
    excerpt: z.string().min(10, {
        message: "Excerpt must be at least 10 characters.",
    }),
    content: z.string().min(50, {
        message: "Content must be at least 50 characters.",
    }),
    tags: z.array(z.string()).min(1, {
        message: "At least one tag is required.",
    }),
    imageUrl: z
        .string()
        .url({
            message: "Please enter a valid URL.",
        })
        .optional()
        .or(z.literal("")),
});

export function NewsArticleForm() {
    const { data: session } = useSession();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [previewMode, setPreviewMode] = useState(false);
    const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            slug: "",
            excerpt: "",
            content: "",
            tags: [],
            imageUrl: "",
        },
    });

    // Watch both title and slug
    const watchTitle = form.watch("title");
    const watchSlug = form.watch("slug");

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .trim()
            .replaceAll(".", "-")
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();
    };

    // Auto-update slug when title changes (only if slug hasn't been manually edited)
    React.useEffect(() => {
        if (watchTitle && !isSlugManuallyEdited) {
            const newSlug = generateSlug(watchTitle);
            form.setValue("slug", newSlug);
        }
    }, [watchTitle, form, isSlugManuallyEdited]);

    // Track if slug has been manually edited
    const handleSlugChange = (value: string) => {
        const expectedSlug = generateSlug(watchTitle);
        setIsSlugManuallyEdited(value !== expectedSlug);
        return value;
    };

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contribute/news", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...values,
                    authorId: session?.user?.id,
                }),
            });

            if (response.ok) {
                router.push("/contribute/success?type=news");
            } else {
                console.error("Failed to submit news article");
            }
        } catch (error) {
            console.error("Error submitting news article:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Card>
            <CardContent className="pt-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter article title" {...field} />
                                    </FormControl>
                                    <FormDescription>A catchy title for your news article</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>URL Slug</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="article-url-slug"
                                            {...field}
                                            onChange={(e) => {
                                                const value = handleSlugChange(e.target.value);
                                                field.onChange(value);
                                            }}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This will be used in the article URL. Use lowercase letters, numbers, and
                                        hyphens only.
                                        {!isSlugManuallyEdited && (
                                            <span className="text-muted-foreground"> (Auto-generated from title)</span>
                                        )}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="excerpt"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Excerpt</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Brief summary of the article" {...field} />
                                    </FormControl>
                                    <FormDescription>A short summary that will appear in news listings</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Content</FormLabel>
                                    <div className="flex gap-2 mb-2">
                                        <Button
                                            type="button"
                                            variant={previewMode ? "outline" : "default"}
                                            onClick={() => setPreviewMode(false)}
                                        >
                                            Write
                                        </Button>
                                        <Button
                                            type="button"
                                            variant={previewMode ? "default" : "outline"}
                                            onClick={() => setPreviewMode(true)}
                                        >
                                            Preview
                                        </Button>
                                    </div>
                                    {previewMode ? (
                                        <div className="border rounded-md p-4 min-h-[300px]">
                                            <MarkdownContent content={field.value} />
                                        </div>
                                    ) : (
                                        <FormControl>
                                            <Textarea
                                                placeholder="Write your article content using Markdown"
                                                className="min-h-[300px]"
                                                {...field}
                                            />
                                        </FormControl>
                                    )}
                                    <FormDescription>You can use Markdown for formatting</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="tags"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tags</FormLabel>
                                    <FormControl>
                                        <TagInput
                                            placeholder="Add tag and press Enter"
                                            tags={field.value}
                                            setTags={field.onChange}
                                        />
                                    </FormControl>
                                    <FormDescription>Add relevant tags to help categorize your article</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="imageUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Featured Image URL (Optional)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://example.com/image.jpg" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        URL to an image that will be displayed with your article
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit Article"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
