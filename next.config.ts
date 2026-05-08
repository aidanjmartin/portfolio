import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — produces /out directory that Cloudflare Pages serves directly.
  output: "export",
  // next/image needs a loader; unoptimized serves images as-is, which is fine for a portfolio.
  images: { unoptimized: true },
  // Generates clean URLs (e.g. /about/ instead of /about) — better for static hosts.
  trailingSlash: true,
};

export default nextConfig;
