module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {},
        'preset-react': {
          runtime: 'automatic',
        },
      },
    ],
  ],
  plugins: [
    // needed to silence a warning about loose mode in unit tests
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@vanilla-extract/babel-plugin', {}],
  ],
  env: {
    test: {
      // presets: [
      //   ['@babel/preset-env', {}],
      //   [
      //     '@babel/preset-react',
      //     {
      //       runtime: 'automatic',
      //     },
      //   ],
      // ],
    },
  },
};
