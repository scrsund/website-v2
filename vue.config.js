const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      },
    },
  },
  transpileDependencies: true,
  outputDir: "dist",
  publicPath: "/",
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp)$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "img/[name].[hash:8].[ext]",
      });
  },
});
