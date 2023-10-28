const project = require('@knoffel/tsconfig/base.json');

module.exports = {
  extends: ['eslint:recommended', 'airbnb-base', 'turbo', 'prettier'],
  plugins: ['import', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'error',
    'no-console': 'error',
  },
};
