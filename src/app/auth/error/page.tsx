import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function AuthErrorPage() {
    return (
        <div className="container max-w-6xl mx-auto flex items-center justify-center min-h-[calc(100vh-200px)] px-4 sm:px-6">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <AlertCircle className="h-16 w-16 text-red-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Authentication Error</CardTitle>
                    <CardDescription>There was a problem signing you in</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="mb-6">
                        We couldn't authenticate you with Discord. Please try again or contact support if the problem
                        persists.
                    </p>
                </CardContent>
                <CardFooter className="flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/auth/signin">Try Again</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/">Return Home</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
