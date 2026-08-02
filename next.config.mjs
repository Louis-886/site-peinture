/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Compression et optimisation des images pour un excellent score Lighthouse
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
};

export default nextConfig;
