module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "no-console": "error",
    indent: ["error", 2],
    "max-len": ["error", { code: 160, ignoreUrls: true }],
    "max-lines": ["error", 200],
    curly: ["error", "all"],
    "no-trailing-spaces": "error",
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    "vue/multi-word-component-names": 0,
    "eol-last": "error",
  },
};
