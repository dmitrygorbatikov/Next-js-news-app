const dotenv = require('dotenv');
dotenv.config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
