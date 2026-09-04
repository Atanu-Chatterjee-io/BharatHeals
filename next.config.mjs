/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // এটি বিল্ড করার সময় ESLint এররগুলো ইগনোর করবে
    ignoreDuringBuilds: true,
  },
  typescript: {
    // এটি বিল্ড করার সময় টাইপস্ক্রিপ্ট এররগুলো ইগনোর করবে
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
