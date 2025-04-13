import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-6">
                <Skeleton className="h-10 w-36" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative aspect-[18/23] rounded-lg overflow-hidden">
                    <Skeleton className="h-full w-full" />
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Skeleton className="h-6 w-20" />
                    </div>

                    <Skeleton className="h-10 w-3/4 mb-1" />
                    <Skeleton className="h-6 w-1/2 mb-6" />

                    <div className="flex gap-6 mb-6">
                        <div className="text-center">
                            <Skeleton className="h-12 w-12 rounded-full mb-1 mx-auto" />
                            <Skeleton className="h-4 w-12 mx-auto" />
                        </div>
                        <div className="text-center">
                            <Skeleton className="h-12 w-12 rounded-full mb-1 mx-auto" />
                            <Skeleton className="h-4 w-12 mx-auto" />
                        </div>
                        <div className="text-center">
                            <Skeleton className="h-12 w-12 rounded-full mb-1 mx-auto" />
                            <Skeleton className="h-4 w-12 mx-auto" />
                        </div>
                        <div className="text-center">
                            <Skeleton className="h-12 w-12 rounded-full mb-1 mx-auto" />
                            <Skeleton className="h-4 w-12 mx-auto" />
                        </div>
                    </div>

                    <div className="mb-6">
                        <Skeleton className="h-6 w-24 mb-2" />
                        <Skeleton className="h-24 w-full rounded-md" />
                    </div>

                    <div className="mb-6">
                        <Skeleton className="h-10 w-full mb-2" />
                        <Skeleton className="h-32 w-full rounded-md" />
                    </div>

                    <div className="mt-6">
                        <Skeleton className="h-6 w-48 mb-3" />
                        <div className="flex flex-wrap gap-2">
                            {Array(3)
                                .fill(0)
                                .map((_, i) => (
                                    <Skeleton key={i} className="h-24 w-24" />
                                ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <Skeleton className="h-10 w-full" />
                    </div>
                </div>
            </div>

            {/* Character's Deck Section */}
            <div className="mt-12">
                <Skeleton className="h-8 w-48 mb-4" />

                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-6">
                    <div className="flex justify-between pb-2">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-5 w-32" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {Array(8)
                            .fill(0)
                            .map((_, i) => (
                                <div key={i} className="flex flex-col">
                                    <Skeleton className="aspect-[3/4] w-full rounded-t-lg" />
                                    <div className="p-4 space-y-2">
                                        <Skeleton className="h-6 w-3/4" />
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-full" />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
