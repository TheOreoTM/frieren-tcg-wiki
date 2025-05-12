import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function AuthErrorLoading() {
    return (
        <div className="container max-w-6xl mx-auto flex items-center justify-center min-h-[calc(100vh-200px)] px-4 sm:px-6">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <Skeleton className="h-8 w-40 mx-auto mb-2" />
                    <Skeleton className="h-4 w-64 mx-auto" />
                </CardHeader>
                <CardContent>
                    <Skeleton className="h-16 w-full mb-4" />
                    <Skeleton className="h-10 w-32 mx-auto" />
                </CardContent>
            </Card>
        </div>
    );
}
