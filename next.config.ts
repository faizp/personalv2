import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["localhost", "127.0.0.1"],
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react', 'framer-motion'],
  },
};

export default nextConfig;
