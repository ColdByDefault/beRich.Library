import withMDX from '@next/mdx';

const mdxConfig = withMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '', // Leave empty if no specific port is required
        pathname: '/**', // Match all paths
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '', // Leave empty if no specific port is required
        pathname: '/**', // Match all paths
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

export default mdxConfig(nextConfig);
