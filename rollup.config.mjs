import { DEFAULT_EXTENSIONS } from "@babel/core";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import dts from "rollup-plugin-dts";
import typescriptEngine from "typescript";
import pkg from "./package.json" assert { type: "json" };

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true
      },
      {
        file: pkg.module,
        format: "esm",
        exports: "named",
        sourcemap: true
      }
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true
      }),
      external({
        includeDependencies: true
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        include: ["*.js+(|x)", "**/*.ts+(|x)"],
        exclude: ["coverage", "config", "dist", "node_modules/**", "**/*.test.jsx", "**/*.test.tsx", "**/*.stories.tsx"]
      }),
      commonjs(),
      babel({
        extensions: [...DEFAULT_EXTENSIONS, ".ts", "tsx"],
        babelHelpers: "runtime",
        exclude: /node_modules/
      }),
      url(),
      svgr(),
      resolve()
    ],
    watch: {
      clearScreen: false
    }
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()]
  }
];
