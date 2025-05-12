import type { UserRole } from "@prisma/client";
import "next-auth";

declare module "next-auth" {
    interface User {
        id: string;
        role: UserRole;
        discordId?: string;
        discordTag?: string;
    }

    interface Session {
        user: {
            id: string;
            role: UserRole;
            discordId?: string;
            discordTag?: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role?: UserRole;
        discordId?: string;
        discordTag?: string;
    }
}
