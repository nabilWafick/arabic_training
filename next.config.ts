import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Skip prerendering auth pages */
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },
};

export default nextConfig;
