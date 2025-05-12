"use client";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarkdownContent from "@/components/markdown-content";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 3 characters.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
    icon: z.string(),
    overview: z.string().min(50, {
        message: "Overview must be at least 50 characters.",
    }),
    rules: z.string().min(50, {
        message: "Rules must be at least 50 characters.",
    }),
    examples: z.string().min(50, {
        message: "Examples must be at least 50 characters.",
    }),
});

const iconOptions = [
    { value: "mana", label: "Mana" },
    { value: "combat", label: "Combat" },
    { value: "spell", label: "Spell" },
    { value: "element", label: "Element" },
    { value: "hero", label: "Hero" },
    { value: "analysis", label: "Analysis" },
    { value: "resolve", label: "Resolve" },
    { value: "nature", label: "Nature" },
    { value: "custom", label: "Custom" },
];

export function MechanicForm() {
    const { data: session } = useSession();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeTab, setActiveTab] = useState("overview");
    const [previewMode, setPreviewMode] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            icon: "custom",
            overview: "",
            rules: "",
            examples: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contribute/mechanic", {
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
                router.push("/contribute/success?type=mechanic");
            } else {
                console.error("Failed to submit mechanic");
            }
        } catch (error) {
            console.error("Error submitting mechanic:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Card>
            <CardContent className="pt-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mechanic Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter mechanic name" {...field} />
                                        </FormControl>
                                        <FormDescription>The name of the game mechanic</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="icon"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Icon Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select an icon type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {iconOptions.map((option) => (
                                                    <SelectItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>Select an icon that represents this mechanic</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Short Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Brief description of the mechanic" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        A concise description that will appear in mechanic listings
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Tabs value={activeTab} onValueChange={setActiveTab}>
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="rules">Rules</TabsTrigger>
                                <TabsTrigger value="examples">Examples</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <FormField
                                    control={form.control}
                                    name="overview"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex gap-2 mb-2 mt-4">
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
                                                        placeholder="Write an overview of the mechanic using Markdown"
                                                        className="min-h-[300px]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            )}
                                            <FormDescription>
                                                Provide a general overview of the mechanic
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </TabsContent>

                            <TabsContent value="rules">
                                <FormField
                                    control={form.control}
                                    name="rules"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex gap-2 mb-2 mt-4">
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
                                                        placeholder="Write the rules for this mechanic using Markdown"
                                                        className="min-h-[300px]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            )}
                                            <FormDescription>
                                                Explain the detailed rules of how this mechanic works
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </TabsContent>

                            <TabsContent value="examples">
                                <FormField
                                    control={form.control}
                                    name="examples"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex gap-2 mb-2 mt-4">
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
                                                        placeholder="Provide examples of this mechanic in action using Markdown"
                                                        className="min-h-[300px]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            )}
                                            <FormDescription>
                                                Give practical examples of how this mechanic is used in the game
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </TabsContent>
                        </Tabs>

                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit Mechanic"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
