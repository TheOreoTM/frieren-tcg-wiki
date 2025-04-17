import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-6">
                <Skeleton className="h-10 w-48" />
            </div>

            <div className="flex items-center gap-3 mb-6">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-10 w-64" />
            </div>

            <Skeleton className="h-6 w-3/4 mb-8" />

            <div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-md mt-4 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/5" />
                    <Skeleton className="h-4 w-3/4" />
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-md mt-6 space-y-3">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-md mt-6 space-y-3">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </div>
            </div>

            <div className="mt-12 flex justify-between">
                <Skeleton className="h-10 w-48" />
                <Skeleton className="h-10 w-40" />
            </div>

            <div className="flex items-center justify-between mt-12 py-3 px-4 bg-gradient-to-r from-accent/50 to-secondary/40 rounded-md">
                <div className="flex items-center gap-2">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-4 w-48" />
            </div>
        </div>
    );
}
