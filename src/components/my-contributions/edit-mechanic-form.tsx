"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarkdownContent from "@/components/markdown-content";
import { toast } from "sonner";
import { TagInput } from "@/components/ui/tag-input";

const formSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters"),
    slug: z
        .string()
        .min(3, "Slug must be at least 3 characters")
        .regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
    excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
    content: z.string().min(50, "Content must be at least 50 characters"),
    tags: z.array(z.string()).optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface EditNewsFormProps {
    article: {
        id: string;
        title: string;
        slug: string;
        excerpt: string;
        content: string;
        tags: string[];
    };
}

export function EditMechanicForm({ article }: EditNewsFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [previewTab, setPreviewTab] = useState<"edit" | "preview">("edit");

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: article.title,
            slug: article.slug,
            excerpt: article.excerpt,
            content: article.content,
            tags: article.tags || [],
        },
    });

    const onSubmit = async (values: FormValues) => {
        setIsSubmitting(true);

        try {
            const response = await fetch(`/api/my-contributions/news/${article.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error("Failed to update news article");
            }

            toast.success("News article updated successfully");
            router.push("/my-contributions");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Failed to update news article");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Edit News Article</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter article title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="slug"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Slug</FormLabel>
                                        <FormControl>
                                            <Input placeholder="article-url-slug" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This will be used in the URL (e.g., /news/article-slug)
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="excerpt"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Excerpt</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Brief summary of the article"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        A short summary that will appear in article previews
                                    </FormDescription>
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
                                            placeholder="Add tag..."
                                            tags={field.value || []}
                                            setTags={(newTags) => field.onChange(newTags)}
                                        />
                                    </FormControl>
                                    <FormDescription>Add relevant tags to help categorize your article</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="space-y-2">
                            <FormLabel>Content</FormLabel>
                            <Tabs
                                value={previewTab}
                                onValueChange={(value) => setPreviewTab(value as "edit" | "preview")}
                            >
                                <TabsList>
                                    <TabsTrigger value="edit">Edit</TabsTrigger>
                                    <TabsTrigger value="preview">Preview</TabsTrigger>
                                </TabsList>
                                <TabsContent value="edit">
                                    <FormField
                                        control={form.control}
                                        name="content"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Write your article content here..."
                                                        className="min-h-[300px] font-mono"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription>You can use Markdown for formatting</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </TabsContent>
                                <TabsContent value="preview">
                                    <div className="border rounded-md p-4 min-h-[300px] prose dark:prose-invert max-w-none">
                                        <MarkdownContent content={form.watch("content")} />
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>

                        <div className="flex justify-end gap-4">
                            <Button type="button" variant="outline" onClick={() => router.push("/my-contributions")}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Saving..." : "Save Changes"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
