/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '', // Leave empty if no specific port is required
        pathname: '/**', // Match all paths
      },
    ],
  },
};
  
export default nextConfig;

  