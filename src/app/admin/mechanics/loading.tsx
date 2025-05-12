import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AdminMechanicsLoading() {
    return (
        <div className="space-y-6">
            <div>
                <Skeleton className="h-8 w-[250px]" />
                <Skeleton className="h-4 w-[350px] mt-2" />
            </div>

            <div className="space-y-2">
                <div className="border-b flex">
                    <Skeleton className="h-10 w-[150px]" />
                    <Skeleton className="h-10 w-[150px] ml-2" />
                </div>
            </div>

            <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                    <Card key={i}>
                        <CardHeader>
                            <Skeleton className="h-6 w-[250px]" />
                            <Skeleton className="h-4 w-[200px] mt-2" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-20 w-full" />
                            <div className="mt-4 flex justify-end">
                                <Skeleton className="h-9 w-[80px]" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
