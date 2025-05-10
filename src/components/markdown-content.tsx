"use client";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";

interface MarkdownContentProps {
    content: string;
    className?: string;
}

export default function MarkdownContent({ content, className }: MarkdownContentProps) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
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
                code: ({ className, ...props }) => (
                    <code className={cn("whitespace-pre-wrap break-words", className)} {...props} />
                ),
                pre: ({ className, ...props }) => (
                    <pre className={cn("my-4 p-4 bg-accent/50 rounded-md", className)} {...props} />
                ),
                p: ({ className, ...props }) => <p className={cn("my-4", className)} {...props} />,
                ol: ({ className, ...props }) => <ol className={cn("my-4 list-decimal pl-6", className)} {...props} />,
                ul: ({ className, ...props }) => <ul className={cn("my-4 list-disc pl-6", className)} {...props} />,
                li: ({ className, ...props }) => <li className={cn("my-1", className)} {...props} />,
                a: ({ className, ...props }) => <a className={cn("font-semibold underline", className)} {...props} />,
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
