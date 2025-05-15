/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  basePath: isProd ? "/NextJs-Portfolio" : "", // Use basePath only in production
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/NextJs-Portfolio" : "", // Expose basePath for client-side use
  },
};

export default nextConfig;
