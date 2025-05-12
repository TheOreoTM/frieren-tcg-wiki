import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
            profile(profile) {
                return {
                    id: profile.id,
                    name: profile.username,
                    email: profile.email,
                    image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`,
                    discordId: profile.id,
                    discordTag: `${profile.username}#${profile.discriminator}`,
                    role: UserRole.USER,
                };
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            if (session.user) {
                if (token.sub) {
                    session.user.id = token.sub;
                }
                if (token.role) {
                    session.user.role = token.role as UserRole;
                }
                if (token.discordId) {
                    session.user.discordId = token.discordId as string;
                }
                if (token.discordTag) {
                    session.user.discordTag = token.discordTag as string;
                }
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
                token.discordId = user.discordId;
                token.discordTag = user.discordTag;
            }
            return token;
        },
    },
    pages: {
        signIn: "/auth/signin",
        error: "/auth/error",
    },
    session: {
        strategy: "jwt",
    },
};
