const prettierConfig = require("./prettier.config");

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  overrides: [],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    project: ["./tsconfig.json"]
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"]
      }
    }
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": ["error", prettierConfig],
    "import/no-anonymous-default-export": 0
  },
  "overrides": [
    {
      "files": ["**/*.stories.tsx"],
      "rules": {
        "@typescript-eslint/consistent-type-assertions": 0
      }
    }
  ]
};
