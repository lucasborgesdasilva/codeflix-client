import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
};

export default nextConfig;
