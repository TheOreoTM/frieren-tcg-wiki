import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Skeleton className="h-10 w-64 mb-2" /> {/* Title placeholder */}
            <Skeleton className="h-5 w-96 mb-8" /> {/* Description placeholder */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <Skeleton className="h-10 w-full md:w-2/3" /> {/* Search bar placeholder */}
                <Skeleton className="h-10 w-full md:w-1/3" /> {/* Filter button placeholder */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array(8)
                    .fill(0)
                    .map((_, i) => (
                        <div key={i} className="flex flex-col gap-2">
                            <Skeleton className="h-64 w-full rounded-lg" /> {/* Character image placeholder */}
                            <Skeleton className="h-6 w-3/4" /> {/* Character name placeholder */}
                            <Skeleton className="h-4 w-full" /> {/* Character description line 1 placeholder */}
                            <Skeleton className="h-4 w-full" /> {/* Character description line 2 placeholder */}
                        </div>
                    ))}
            </div>
        </div>
    );
}
