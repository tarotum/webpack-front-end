module.exports = {
  extends: 'standard',
  rules: {
    indent: [2, 'tab'],
    quotes: [1, 'single'],
    'linebreak-style': [2, 'windows'],
    'no-tabs': 0,
    semi: [2, 'always'],
    'no-mixed-spaces-and-tabs': [0, 'smart-tabs'],
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jquery: true,
  },
};
