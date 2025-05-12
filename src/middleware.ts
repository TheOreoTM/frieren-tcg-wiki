import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request });

    // Check if the user is authenticated for protected routes
    if (!token && request.nextUrl.pathname.startsWith("/contribute")) {
        const url = new URL("/auth/signin", request.url);
        url.searchParams.set("callbackUrl", request.nextUrl.pathname);
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/contribute/:path*"],
};
