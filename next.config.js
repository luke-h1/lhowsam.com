module.exports = {
  trailingSlash: true,
  webpack(config, { isServer }) {
    if (isServer) {
      // eslint-disable-next-line global-require
      require('./src/lib/gen-sitemap');
    }
    return config;
  },
};
