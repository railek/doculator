const project = require('@knoffel/tsconfig/next.json');

module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/react',
    'turbo',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import', 'jsx-a11y', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    React: true,
    JSX: true,
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
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    'import/no-unresolved': 'error',
    'prettier/prettier': 'error',
    'import/no-default-export': 'off',
    'no-console': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  },
};
