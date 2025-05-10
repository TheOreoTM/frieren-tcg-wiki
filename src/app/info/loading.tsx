import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Skeleton className="h-10 w-64 mb-4" />
            <Skeleton className="h-6 w-96 mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {Array(3)
                    .fill(0)
                    .map((_, i) => (
                        <div key={i} className="flex flex-col gap-2">
                            <Skeleton className="h-8 w-48 mb-2" />
                            <Skeleton className="h-4 w-64 mb-4" />
                            <Skeleton className="h-16 w-full" />
                            <Skeleton className="h-10 w-full mt-4" />
                        </div>
                    ))}
            </div>

            {Array(3)
                .fill(0)
                .map((_, i) => (
                    <div key={i} className="mb-16">
                        <Skeleton className="h-8 w-64 mb-6" />
                        <Skeleton className="h-48 w-full rounded-lg mb-8" />
                        <Skeleton className="h-48 w-full rounded-lg mb-8" />
                        <Skeleton className="h-64 w-full rounded-lg" />
                    </div>
                ))}
        </div>
    );
}
