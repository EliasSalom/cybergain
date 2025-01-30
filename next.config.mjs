/** @type {import('next').NextConfig} */

const nextConfig = {
    compiler: {
      styledComponents: true,
    },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'public.qa.cybergain.io',
        pathname: '/**',
      },
    ],
  },

  };
  

export default nextConfig;
