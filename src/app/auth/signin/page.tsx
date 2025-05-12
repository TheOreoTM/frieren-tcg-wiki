"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DiscordIcon } from "@/components/svg/Discord";

export default function SignIn() {
    return (
        <div className="container max-w-6xl mx-auto flex items-center justify-center min-h-[calc(100vh-200px)] px-4 sm:px-6">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
                    <CardDescription>Sign in with Discord to contribute to the Frieren TCG Wiki</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <Button
                        className="w-full max-w-xs flex items-center justify-center gap-2"
                        onClick={() => signIn("discord", { callbackUrl: "/contribute" })}
                    >
                        <DiscordIcon className="h-5 w-5" />
                        Sign in with Discord
                    </Button>
                </CardContent>
                <CardFooter className="flex justify-center text-sm text-muted-foreground">
                    You need a Discord account to contribute
                </CardFooter>
            </Card>
        </div>
    );
}
