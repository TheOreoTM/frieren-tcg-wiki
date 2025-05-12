import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AdminNewsLoading() {
    return (
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-8">
            <div className="mb-8">
                <Skeleton className="h-10 w-64 mb-2" />
                <Skeleton className="h-5 w-96" />
            </div>

            {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="mb-4">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <Skeleton className="h-6 w-48 mb-2" />
                                <Skeleton className="h-4 w-32" />
                            </div>
                            <div className="flex space-x-2">
                                <Skeleton className="h-9 w-24" />
                                <Skeleton className="h-9 w-24" />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-5/6" />
                        <div className="flex mt-4 space-x-2">
                            <Skeleton className="h-6 w-16" />
                            <Skeleton className="h-6 w-16" />
                            <Skeleton className="h-6 w-16" />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
