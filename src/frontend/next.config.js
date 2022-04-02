/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
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
  webpack(config) {
    config.module.rules.push({
      test: /react-spring/,
      sideEffects: true,
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/blog/deploying-a-full-stack-app-via-dokku',
        destination: '/blog/full-stack-deploy-with-dokku',
        permanent: true,
      },
    ];
  },
};
