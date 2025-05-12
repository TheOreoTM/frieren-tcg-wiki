import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ContributeLoading() {
    return (
        <div className="container max-w-6xl mx-auto py-10 px-4 sm:px-6">
            <Skeleton className="h-10 w-3/4 max-w-md mb-6" />
            <Skeleton className="h-6 w-full max-w-2xl mb-10" />

            <div className="mb-8">
                <Skeleton className="h-12 w-full mb-8" />
            </div>

            <Card>
                <CardContent className="pt-6">
                    <Skeleton className="h-8 w-1/3 mb-4" />
                    <Skeleton className="h-6 w-2/3 mb-6" />

                    <div className="space-y-4">
                        <Skeleton className="h-12 w-full" />
                        <Skeleton className="h-32 w-full" />
                        <Skeleton className="h-12 w-full" />
                        <Skeleton className="h-32 w-full" />
                        <Skeleton className="h-12 w-1/3" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
