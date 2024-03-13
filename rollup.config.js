/**
 * @type { import('rollup').RollupOptions }
 */
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
module.exports = {
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
