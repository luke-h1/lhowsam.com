/**
 * @type {import('next').NextConfig}
 */

const withTranspileModules = require('next-transpile-modules');

const nextConfig = {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack: (config, { dev, isServer, ...options }) => {
    if (process.env.ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: options.isServer
            ? '../analyze/server.html'
            : '../analyze/client.html',
        }),
      );
    }
    return config;
  },
};

module.exports = withTranspileModules(['studio'])(nextConfig);
