import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
    ignoreDuringBuilds: true, // 🚫 Skips ESLint checks on Vercel
  },
    images: {
    domains: ['images.pexels.com'], // ✅ allow this external domain
  },
};

export default nextConfig;
