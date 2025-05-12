import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
    return (
        <div className="container max-w-6xl mx-auto flex items-center justify-center min-h-[calc(100vh-200px)] px-4 sm:px-6">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Submission Successful!</CardTitle>
                    <CardDescription>Thank you for contributing to the Frieren TCG Wiki</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="mb-6">
                        Your submission has been received and will be reviewed by our team. Once approved, it will be
                        published on the wiki.
                    </p>
                </CardContent>
                <CardFooter className="flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contribute">Submit Another</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/">Return Home</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
