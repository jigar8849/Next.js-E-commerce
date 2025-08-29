import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
    ignoreDuringBuilds: true, // 🚫 Skips ESLint checks on Vercel
  },
};

export default nextConfig;
