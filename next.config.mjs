/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  basePath: "/NextJs-Portfolio", // Use your repository name here
};

module.exports = nextConfig;
