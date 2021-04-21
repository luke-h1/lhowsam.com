/* eslint-disable */
const {
  WebpackBundleSizeAnalyzerPlugin,
} = require('webpack-bundle-size-analyzer');
const { withSentryConfig } = require('@sentry/nextjs');

const { ANALYZE } = process.env;

const SentryWebpackPluginOptions = {

  
  release: 1
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

const moduleExports = {
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

module.exports =  withSentryConfig(moduleExports, SentryWebpackPluginOptions)
