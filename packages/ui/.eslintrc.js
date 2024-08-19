module.exports = {
  extends: [
    '@studio-lihe/eslint-config',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
