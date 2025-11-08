/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for Vercel deployment
  // Vercel handles Next.js natively without needing static export
  images: {
    unoptimized: true,
  },
  // Remove basePath for Vercel - only needed for GitHub Pages
};

module.exports = nextConfig;
