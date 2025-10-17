import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos","images.unsplash.com"], // ✅ only hostname, no protocol or slash
  },
};

export default nextConfig;
