/** @type {import('next').NextConfig} */

const basePath = process.env.NODE_ENV === 'development' ? '' : '/me';
const nextConfig = {
  basePath: basePath,
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
