module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/button-has-type': 0,
    'prettier/prettier': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/ban-types': 0,
    'import/extensions': 0,
    'react/function-component-definition': 0,
    'jsx-a11y/alt-text': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/jsx-no-constructed-context-values': 0,
    'no-console': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'import/no-cycle': 0,
    'no-underscore-dangle': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-useless-escape': 0,
    'import/newline-after-import': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/self-closing-comp': 0,
    'import/order': 0,
    'no-empty-pattern': 0,
    'no-else-return': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-unneeded-ternary': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-no-duplicate-props': 0,
    'object-shorthand': 0,
    'react/require-default-props': 0,
    'no-nested-ternary': 0,
    'no-useless-return': 0,
  },
}
