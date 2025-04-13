import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Skeleton className="h-10 w-64 mb-8" />

            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <Skeleton className="w-full md:w-1/3 h-10" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array(12)
                    .fill(0)
                    .map((_, i) => (
                        <div key={i} className="flex flex-col">
                            <div className="relative pt-[150%]">
                                <Skeleton className="absolute inset-0 rounded-t-lg" />
                                <div className="absolute top-2 left-2 flex gap-2">
                                    <Skeleton className="h-6 w-8 rounded-full" />
                                    <Skeleton className="h-6 w-8 rounded-full" />
                                    <Skeleton className="h-6 w-8 rounded-full" />
                                    <Skeleton className="h-6 w-8 rounded-full" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <Skeleton className="h-6 w-3/4" />
                                </div>
                            </div>
                            <div className="p-4 space-y-2">
                                <div className="flex justify-between mb-2">
                                    <Skeleton className="h-8 w-8 rounded-full" />
                                    <Skeleton className="h-8 w-8 rounded-full" />
                                </div>
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                            </div>
                            <div className="px-4 pb-4">
                                <Skeleton className="h-4 w-16" />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
