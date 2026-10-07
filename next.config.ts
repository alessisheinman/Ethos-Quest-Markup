import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Empty for the real deployment. The GitHub Pages preview build sets PAGES_BASE_PATH (see scripts/export-pages.mjs).
  basePath: process.env.PAGES_BASE_PATH ?? "",
};

export default nextConfig;
