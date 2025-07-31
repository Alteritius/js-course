module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    quotes: [
      "error",
      "single",
      {
        allowTemplateLiterals: true,
      },
    ],
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
      },
    ],
    // Add your ESLint rules here
  },
};
