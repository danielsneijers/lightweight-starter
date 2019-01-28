const useBuiltIns = 'usage';
const targets = { browsers: ['> 1%', 'Last 2 versions', 'IE 11'] };

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns,
        modules: false,
        targets,
      },
    ],
  ],
  env: {
    test: {
      presets: [['@babel/preset-env', { targets }]],
    },
  },
};
