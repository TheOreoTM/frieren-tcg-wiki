"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

interface ErrorMap {
    [key: string]: {
        message: string;
        type?: "info" | "success" | "warning" | "error";
    };
}

const errorMap: ErrorMap = {
    ArticleNotFound: {
        message: "The article you were looking for was not found.",
        type: "error",
    },
    Unauthorized: {
        message: "You are not authorized to view this content.",
        type: "warning",
    },
    Timeout: {
        message: "Request timed out. Please try again later.",
        type: "error",
    },
    Saved: {
        message: "Changes saved successfully.",
        type: "success",
    },
};

export function ErrorHandler() {
    const searchParams = useSearchParams();
    const errorCode = searchParams.get("error");

    useEffect(() => {
        if (errorCode && errorMap[errorCode]) {
            const { message, type = "error" } = errorMap[errorCode];
            toast[type](message);
        }
    }, [errorCode]);

    return null;
}
