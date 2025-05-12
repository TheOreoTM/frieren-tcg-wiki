import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SignInLoading() {
    return (
        <div className="container max-w-6xl mx-auto flex items-center justify-center min-h-[calc(100vh-200px)] px-4 sm:px-6">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <Skeleton className="h-8 w-40 mx-auto mb-2" />
                    <Skeleton className="h-4 w-64 mx-auto" />
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <Skeleton className="h-10 w-full max-w-xs" />
                </CardContent>
            </Card>
        </div>
    );
}
