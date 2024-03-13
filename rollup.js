const rollup = require("rollup");
const build = async () => {
  /**
   * @type { import('rollup').InputOptions }
   */
  const inputOption = {
    input: "./src/utils.js",
  };
  /**
   * @type { import('rollup').OutputOptions }
   */
  const outputOptions = {
    dir: "./dist/jsApi",
    format: "esm",
    entryFileNames: "[name].js",
    chunkFileNames: "chunk-[hash].js",
    assetFileNames: "assets/[name]-[hash][extname]",
  };
  let bundle;
  let buildFailed = false;
  try {
    bundle = await rollup.rollup(inputOption);
    // 🌸 生成产物
    const { output } = await bundle.generate(outputOptions);
    // 🌸 写入磁盘
    await bundle.write(outputOptions);
  } catch (error) {
    buildFailed = true;
    console.error(error);
  }
  if (bundle) {
    await bundle.close();
  }
  process.exit(buildFailed ? 1 : 0);
};
build();
