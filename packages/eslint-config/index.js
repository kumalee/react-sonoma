module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier', // for better performance of formatting with prettier
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended', // remove @typescript-eslint/eslint-recommended, and @typescript-eslint/recommended extends it
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['@typescript-eslint', 'unused-imports'],
  rules: {
    'unused-imports/no-unused-imports': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-return-await': 'warn',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-unresolved': 'off', // some import of alias path would report error
    '@typescript-eslint/no-unsafe-assignment': 'warn', // error in recommended-requiring-type-checking
    '@typescript-eslint/restrict-template-expressions': 'warn', // error in recommended-requiring-type-checking
    '@typescript-eslint/require-await': 'warn', // error in recommended-requiring-type-checking
    'no-multiple-empty-lines': ['warn', { max: 1 }], // to remake the lines in import groups effect like next project
  },
  ignorePatterns: ['.eslintrc.js', '/**/*.spec.ts'],
};
