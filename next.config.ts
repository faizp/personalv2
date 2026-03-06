import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react', 'framer-motion'],
  },
};

export default nextConfig;
