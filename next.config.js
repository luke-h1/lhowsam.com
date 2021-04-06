/* eslint-disable global-require */
const {
  WebpackBundleSizeAnalyzerPlugin,
} = require('webpack-bundle-size-analyzer');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const { ANALYZE } = process.env;

module.exports = withPlugins([
  optimizedImages, {
    // config for images goes here..
  },
], {
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
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
});

// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (ANALYZE) {
//       config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'));
//     }
//     if (isServer) {
//       require('./src/utils/generate-sitemap');
//     }

//     return config;
//   },
//   future: {
//     webpack5: true,
//     strictPostcssConfiguration: true,
//   },
//   images: {
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     domains: ['lhowsam.com'],
//   },
// };
