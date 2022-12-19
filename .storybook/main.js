const custom = require("./webpack.config.js");

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/preset-scss",
    "@storybook/preset-typescript",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-docs",
      options: { configureJSX: true }
    },
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss")
        }
      }
    }
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        ...custom.resolve
      },
      module: {
        ...config.module,
        rules: custom.module.rules
      }
    };
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
};
