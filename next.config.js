module.exports = {
  exportTrailingslash: true,
  exportPathMap: function () {
    const paths = {
      "/": { page: "/" },
    };

    return paths;
  },
};

module.exports = {
  distDir: "_next",
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
};

const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withOptimizedImages = require("next-optimized-images");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const withSourceMaps = require("@zeit/next-source-maps");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = withSourceMaps(
  withOptimizedImages(
    withCSS(
      withSass({
        mode: "production",
        optimization: {
          minimizer: [
            new TerserPlugin({ parallel: true }),
            new OptimizeCSSAssetsPlugin({}),
          ],
        },

        swcMinify: true,
        sourceMap: true,
        compress: true,
        responsive: {
          adapter: require("responsive-loader/sharp"),
        },
        module: {
          rules: [
            {
              test: /\.(webp|png|jpg|gif|svg|eot|ttf|woff|woff2)$/i,
              use: [
                {
                  loader: ["file-loader", "webp-loader"],
                },
                [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
              ],
            },
          ],
        },
        images: {
          domains: [
            "kiero.co",
            "api.kieroapi.net",
            "images-na.ssl-images-amazon.com",
            "localhost",
            "127.0.0.1",
          ],
        },
        "**/*.js?(x)": (filenames) =>
          `next lint --fix --file ${filenames
            .map((file) => file.split(process.cwd())[1])
            .join(" --file ")}`,

        eslint: {
          dirs: ["services"], // Solo consultar en "services"
        },
      })
    )
  )
);
