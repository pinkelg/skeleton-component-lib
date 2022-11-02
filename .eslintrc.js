module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["src/**/*.stories.tsx"],
      rules: {
        "@typescript-eslint/consistent-type-assertions": "off"
      }
    }
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"]
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"]
      }
    }
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {}
};
