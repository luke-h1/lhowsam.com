/**
 * @type {import('next').NextConfig}
 */

const withTranspileModules = require('next-transpile-modules');

const nextConfig = {
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  generateBuildId: async () => {
    return '1';
  },
  images: {
    domains: ['localhost', 'cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/blog/deploying-a-full-stack-app-via-dokku',
        destination: '/blog/full-stack-deploy-with-dokku',
        permanent: true,
      },
      {
        source: '/blog/nextjs-ssr-notes',
        destination: '/blog/next-js-ssr-notes',
        permanent: true,
      },
    ];
  },
};

module.exports = withTranspileModules(['studio'])(nextConfig);
