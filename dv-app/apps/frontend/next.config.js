/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // These are the "master" widths Next.js will use to resize your images
    deviceSizes: [640, 750, 828, 1080, 1200, 1536, 1920, 2304],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 480],
    formats: ["image/avif", "image/webp"], // AVIF is 20% smaller than WebP
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dnuwgwfhk/image/upload/**",
      },
    ],
  },
};

export default nextConfig;

//avif is 20% smaller than webp, and webp is 25-34% smaller than jpeg, so avif is around 40-50% smaller than jpeg.
