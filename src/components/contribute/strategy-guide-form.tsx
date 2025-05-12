"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { TagInput } from "@/components/ui/tag-input";
import MarkdownContent from "@/components/markdown-content";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Characters } from "@/data/characters";

const characters = Array.from(Characters.values());
const formSchema = z.object({
    title: z.string().min(5, {
        message: "Title must be at least 5 characters.",
    }),
    characterId: z.string().optional(),
    content: z.string().min(100, {
        message: "Content must be at least 100 characters.",
    }),
    tags: z.array(z.string()).min(1, {
        message: "At least one tag is required.",
    }),
});

export function StrategyGuideForm() {
    const { data: session } = useSession();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [previewMode, setPreviewMode] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            characterId: undefined,
            content: "",
            tags: [],
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contribute/strategy", {
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
                router.push("/contribute/success?type=strategy");
            } else {
                console.error("Failed to submit strategy guide");
            }
        } catch (error) {
            console.error("Error submitting strategy guide:", error);
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
                                        <Input placeholder="Enter strategy guide title" {...field} />
                                    </FormControl>
                                    <div className="text-muted-foreground text-sm">
                                        A descriptive title for your strategy guide
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="characterId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Character (Optional)</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a character" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {characters.map((character) => (
                                                <SelectItem key={character.id} value={character.id}>
                                                    {character.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <div className="text-muted-foreground text-sm">
                                        If this guide is for a specific character, select them here
                                    </div>
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
                                        <div className="border rounded-md p-4 min-h-[400px]">
                                            <MarkdownContent content={field.value} />
                                        </div>
                                    ) : (
                                        <FormControl>
                                            <Textarea
                                                placeholder="Write your strategy guide using Markdown"
                                                className="min-h-[400px]"
                                                {...field}
                                            />
                                        </FormControl>
                                    )}
                                    <div className="text-muted-foreground text-sm">
                                        You can use Markdown for formatting. Consider including sections like:
                                    </div>
                                    <ul className="list-disc pl-5 mt-2 text-muted-foreground text-sm">
                                        <li>Overview of the strategy</li>
                                        <li>Key cards to use</li>
                                        <li>Combos and synergies</li>
                                        <li>Matchup advice</li>
                                        <li>Tips and tricks</li>
                                    </ul>
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
                                    <div className="text-muted-foreground text-sm">
                                        Add relevant tags like "beginner", "advanced", "combo", etc.
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit Strategy Guide"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
