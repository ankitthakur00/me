/** @type {import('next').NextConfig} */

const basePath = process.env.NODE_ENV === 'development' ? '' : '/me';
const nextConfig = {
    basePath: '', // Explicitly set to empty for root access locally
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  redirects: async () => {
    return [
      {
        source: '/profile',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
