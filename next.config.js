/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

  module.exports =  nextConfig;

//   configuration link:https://nextjs.org/docs/messages/next-image-unconfigured-host