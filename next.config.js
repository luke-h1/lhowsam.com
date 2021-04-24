/* eslint-disable */
const {
  WebpackBundleSizeAnalyzerPlugin,
} = require('webpack-bundle-size-analyzer');

const { ANALYZE } = process.env;

module.exports = {
  webpack: (config, { isServer }) => {
    if (ANALYZE) {
      config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'));
    }
    if (isServer) {
      require('./src/utils/generate-sitemap');
    }

    return config;
  },
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ['lhowsam.com'],
  },
};
