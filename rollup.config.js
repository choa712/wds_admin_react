import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";
import resolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";
import ts from "typescript";
import strip from "@rollup/plugin-strip";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { visualizer } from "rollup-plugin-visualizer";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcssImport from "postcss-import";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "./src/index.tsx",
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  output: [
    {
      file: `${pkg.module}`,
      format: "es",
      sourcemap: true,
    },
    {
      file: `${pkg.main}`,
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    visualizer({
      sourcemap: true,
    }),
    postcss({
      extensions: [".css"],
      minimize: true,
      plugins: [autoprefixer(), cssnano(), postcssImport()],
    }),
    babel({
      exclude: "node_modules/**",
      plugins: ["babel-plugin-styled-components"],
    }),
    typescript({
      typescript: ts,
      tsconfig: "tsconfig.json",
      tsconfigDefaults: {
        exclude: [
          "**/*.spec.ts",
          "**/*.test.ts",
          "**/*.stories.ts",
          "**/*.spec.tsx",
          "**/*.test.tsx",
          "**/*.stories.tsx",
          "node_modules",
          "bower_components",
          "jspm_packages",
          "dist",
        ],
        compilerOptions: {
          sourceMap: true,
          declaration: true,
        },
      },
    }),
    terser({
      output: {
        comments: false,
      },
    }),
    copy({
      targets: [
        { src: "LICENSE", dest: "dist" },
        { src: "README.md", dest: "dist" },
        {
          src: "package.json",
          dest: "dist",
          transform: (content) => {
            const { scripts, devDependencies, husky, release, engines, ...keep } = JSON.parse(content.toString());
            return JSON.stringify(keep, null, 2);
          },
        },
        { src: "src/assets/svg/bg", dest: "dist/assets/svg" },
      ],
    }),
    image(),
    strip({
      include: "**/*.(js|ts|jsx|tsx)",
      function: ["console.*"],
    }),
  ],
};
