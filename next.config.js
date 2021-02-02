/* eslint-disable global-require */
const {
  WebpackBundleSizeAnalyzerPlugin,
} = require('webpack-bundle-size-analyzer');

const { ANALYZE } = process.env;

module.exports = {
  webpack: (config, { isServer, dev }) => {
    if (ANALYZE) {
      config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'));
    }
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  },
};
