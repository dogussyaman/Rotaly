import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: [
      'localhost', 
      'vercel.app', 
      'media.istockphoto.com', 
      'images.unsplash.com', 
      'imagedelivery.net',
      'encrypted-tbn0.gstatic.com',
      'www.asortie.com',
      'www.swissotel.com',
      'www.peninsula.com',
      'dq5r178u4t83b.cloudfront.net',
      'www.fourseasons.com',
      'pix4.agoda.net',
      'pix1.agoda.net',
      'pix2.agoda.net',
      'pix3.agoda.net',
      'pix5.agoda.net',
      'pix6.agoda.net',
      'pix7.agoda.net',
      'pix8.agoda.net',
      'images.odamax.com',
    ],
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-day-picker'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default withNextIntl(nextConfig);
