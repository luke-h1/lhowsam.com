module.exports = {
  experimental: {
    swcLoader: true,
    swcMinify: false,
  },
  reactStrictMode: true,
  generateBuildId: async () => {
    return '1';
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
