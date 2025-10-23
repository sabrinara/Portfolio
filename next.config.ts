import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos",
      "images.unsplash.com",
      "res.cloudinary.com",
      "i.ibb.co",
      "cdn.example.com",
    ], // ✅ only hostname, no protocol or slash
  },
};

export default nextConfig;
