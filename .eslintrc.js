module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
// This configuration sets up ESLint for a TypeScript project with recommended rules and Prettier integration.
// It uses the TypeScript parser and includes rules for unused variables and explicit 'any' types.
// The 'no-unused-vars' rule is set to 'warn' to help catch unused variables without failing the build.
// The '@typescript-eslint/no-explicit-any' rule is turned off to allow the use of 'any' type, which can be useful in some cases.
// You can customize the rules further based on your project's needs.