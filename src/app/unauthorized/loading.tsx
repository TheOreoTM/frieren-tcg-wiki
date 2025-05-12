import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function UnauthorizedLoading() {
    return (
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-8 min-h-[calc(100vh-200px)] flex items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">
                        <Skeleton className="h-8 w-48 mx-auto" />
                    </CardTitle>
                    <CardDescription>
                        <Skeleton className="h-4 w-64 mx-auto mt-2" />
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <Skeleton className="h-4 w-72 mx-auto mb-2" />
                    <Skeleton className="h-4 w-64 mx-auto mb-2" />
                    <Skeleton className="h-4 w-56 mx-auto" />
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Skeleton className="h-10 w-32 mx-auto" />
                </CardFooter>
            </Card>
        </div>
    );
}
