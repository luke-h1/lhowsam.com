module.exports = {
  trailingSlash: true,
  webpack(config, { isServer }) {
    if (isServer) {
      // eslint-disable-next-line global-require
      require('./src/utils/gen-sitemap.js');
    }
    return config;
  },
  future: {
    webpack5: true,
  },
};
