import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static.wikia.nocookie.net",
                pathname: "/frieren/images/**",
            },
            {
                protocol: "https",
                hostname: "cdn.discordapp.com",
                pathname: "/attachments/**",
            },
            {
                protocol: "https",
                hostname: "discord.com",
                pathname: "/assets/**",
            },
            {
                protocol: "https",
                hostname: "c.tenor.com",
                pathname: "/**",
            },
        ],
    },
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
