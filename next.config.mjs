/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve AVIF first (best compression), fall back to WebP, then original
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
