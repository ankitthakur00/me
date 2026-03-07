/** @type {import('next').NextConfig} */

const basePath = process.env.NODE_ENV === 'development' ? '' : '/me';
const nextConfig = {
  output: 'export', // Enable static export for GitHub Pages
  basePath: basePath,
  images: {
    unoptimized: true, // Required for static export
  },
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
