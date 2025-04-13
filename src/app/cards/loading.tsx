import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <Skeleton className="h-10 w-48 mb-2" />
                    <Skeleton className="h-5 w-64" />
                </div>
                <Skeleton className="h-10 w-24 mt-4 md:mt-0" />
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-6">
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <Skeleton className="w-full md:w-2/3 h-10" />
                    <Skeleton className="w-full md:w-1/3 h-10" />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {Array(6)
                        .fill(0)
                        .map((_, i) => (
                            <Skeleton key={i} className="h-8 w-24" />
                        ))}
                </div>

                <div className="flex justify-end">
                    <Skeleton className="h-5 w-48" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array(12)
                    .fill(0)
                    .map((_, i) => (
                        <div key={i} className="flex flex-col">
                            <Skeleton className="aspect-[3/4] w-full rounded-t-lg" />
                            <div className="p-4 space-y-2">
                                <Skeleton className="h-6 w-3/4" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <div className="pt-2 flex justify-between items-center">
                                    <Skeleton className="h-6 w-20" />
                                    <Skeleton className="h-6 w-6 rounded-full" />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
