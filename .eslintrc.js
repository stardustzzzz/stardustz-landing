module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  extends: "next",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 12,
  },
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",

  },
  overrides: [
    {
      files: ["hardhat.config.js"],
      globals: { task: true },
    },
  ],
};
