import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AdminDashboardLoading() {
    return (
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-8">
            <div className="mb-8">
                <Skeleton className="h-10 w-64 mb-2" />
                <Skeleton className="h-5 w-96" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Card key={i}>
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-center">
                                <Skeleton className="h-6 w-32" />
                                <Skeleton className="h-5 w-5 rounded-full" />
                            </div>
                            <Skeleton className="h-4 w-40 mt-1" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-8 w-16 mb-2" />
                            <Skeleton className="h-9 w-28" />
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <Card>
                    <CardHeader>
                        <Skeleton className="h-6 w-40 mb-1" />
                        <Skeleton className="h-4 w-56" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <Skeleton key={i} className="h-5 w-full" />
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <Skeleton className="h-6 w-40 mb-1" />
                        <Skeleton className="h-4 w-56" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <Skeleton key={i} className="h-10 w-full" />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
