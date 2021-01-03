module.exports = api => {
  // Testing if babel is being run in test mode
  const isTest = api.env('testing');
  api.cache(true);
  return {
    presets: [
      '@babel/preset-react',
      '@babel/preset-typescript',
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['last 2 versions'],
          },
          modules: isTest ? 'commonjs' : false,
        },
      ],
    ],
    plugins: [
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true,
        },
      ],
    ],
  };
};
