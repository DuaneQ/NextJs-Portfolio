/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  basePath: "/NextJs-Portfolio", // Use your repository name here
  env: {
    NEXT_PUBLIC_BASE_PATH: "/NextJs-Portfolio",
  },
};

export default nextConfig;
