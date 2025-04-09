import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ],
  },
};

export default nextConfig;
