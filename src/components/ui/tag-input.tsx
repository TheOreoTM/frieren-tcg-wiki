"use client";

import type React from "react";

import { useState } from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface TagInputProps {
    placeholder?: string;
    tags: string[];
    setTags: (tags: string[]) => void;
    disabled?: boolean;
}

export function TagInput({ placeholder, tags, setTags, disabled = false }: TagInputProps) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputValue) {
            e.preventDefault();
            if (!tags.includes(inputValue.trim())) {
                setTags([...tags, inputValue.trim()]);
            }
            setInputValue("");
        } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
            e.preventDefault();
            const newTags = [...tags];
            newTags.pop();
            setTags(newTags);
        }
    };

    const removeTag = (index: number) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    return (
        <div className="flex flex-wrap gap-2 p-2 border rounded-md">
            {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <button
                        type="button"
                        onClick={() => removeTag(index)}
                        className="rounded-full hover:bg-muted"
                        disabled={disabled}
                    >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove {tag}</span>
                    </button>
                </Badge>
            ))}
            <Input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                placeholder={placeholder || "Add tag..."}
                className="flex-1 border-0 p-0 text-sm focus-visible:ring-0 shadow-none"
                disabled={disabled}
            />
        </div>
    );
}
