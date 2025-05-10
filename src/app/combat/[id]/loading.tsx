import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Skeleton className="h-10 w-32 mb-6" />

            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <Skeleton className="h-6 w-24 mb-2" />
                    <Skeleton className="h-12 w-full mb-4" />
                    <Skeleton className="h-4 w-48 mb-6" />
                </div>

                <Skeleton className="h-96 w-full mb-8 rounded-lg" />

                <div className="space-y-4 mb-12">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-5/6" />
                </div>

                <Skeleton className="h-8 w-48 mb-6" />
                <div className="flex flex-wrap gap-2 mb-12">
                    {Array(4)
                        .fill(0)
                        .map((_, i) => (
                            <Skeleton key={i} className="h-6 w-16 rounded-full" />
                        ))}
                </div>
            </div>
        </div>
    );
}
