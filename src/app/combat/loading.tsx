import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Skeleton className="h-10 w-64 mb-2" />
            <Skeleton className="h-5 w-96 mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array(6)
                    .fill(0)
                    .map((_, i) => (
                        <div key={i} className="flex flex-col gap-2">
                            <Skeleton className="h-48 w-full rounded-lg" />
                            <Skeleton className="h-6 w-3/4 mt-2" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                    ))}
            </div>
        </div>
    );
}
