import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function UnauthorizedPage() {
    return (
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-8 min-h-[calc(100vh-200px)] flex items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">Access Denied</CardTitle>
                    <CardDescription>You don't have permission to access this page.</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="mb-4">This area is restricted to authorized administrators only.</p>
                    <p>If you believe you should have access, please contact Oreo ™️.</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Link href="/">
                        <Button>Return to Home</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
