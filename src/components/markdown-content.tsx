"use client";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

interface MarkdownContentProps {
    content: string;
    className?: string;
}

export default function MarkdownContent({ content, className }: MarkdownContentProps) {
    return (
        <ReactMarkdown
            components={{
                h1: ({ className, ...props }) => (
                    <h1 className={cn("text-3xl font-bold mt-8 mb-4", className)} {...props} />
                ),
                h2: ({ className, ...props }) => (
                    <h2 className={cn("text-2xl font-bold mt-8 mb-4", className)} {...props} />
                ),
                h3: ({ className, ...props }) => (
                    <h3 className={cn("text-xl font-bold mt-6 mb-3", className)} {...props} />
                ),
                pre: ({ className, ...props }) => (
                    <pre className={cn("my-4 p-4 bg-accent/50 rounded-md", className)} {...props} />
                ),
                p: ({ className, ...props }) => <p className={cn("my-4", className)} {...props} />,
                ul: ({ className, ...props }) => <ul className={cn("my-4 list-disc pl-6", className)} {...props} />,
                li: ({ className, ...props }) => <li className={cn("my-1", className)} {...props} />,
                a: ({ className, ...props }) => <a className={cn("text-primary underline", className)} {...props} />,
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
