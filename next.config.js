module.exports = {
    presets: ['next/babel'],
    plugins: [
      [
        "emotion",
        {
          "sourceMap": true,
          "autoLabel": process.env.NODE_ENV !== 'production',
          "labelFormat": "[local]",
          "cssPropOptimization": true
        }
      ],
      ["macros"],
    ]
  };