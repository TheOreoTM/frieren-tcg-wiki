"use client";

import { useEffect } from "react";
import { toast } from "sonner";

type ToastType = "info" | "success" | "warning" | "error";

interface ErrorToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
}

export function ErrorToast({ message, type = "error", duration = 4000 }: ErrorToastProps) {
    useEffect(() => {
        toast[type](message, { duration });
    }, [message, type, duration]);

    return null;
}
