/**
 * @type { import('rollup').RollupOptions }
 */
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
export default {
  input: "./src/index.js",
  output: [
    {
      dir: "dist/es",
      format: "esm",
      entryFileNames: "[name].js",
      chunkFileNames: "chunk-[hash].js",
      assetFileNames: "assets/[name]-[hash][extname]",
    },
    {
      dir: "dist/cjs",
      format: "cjs",
    },
  ],
  plugins: [resolve(), commonjs()],
};
