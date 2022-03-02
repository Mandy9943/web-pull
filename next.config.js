const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withOptimizedImages = require("next-optimized-images");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const withSourceMaps = require("@zeit/next-source-maps");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        webpack: (config, options) => {
          if (config.optimization.splitChunks) {
            config.optimization.splitChunks.cacheGroups.shared = {
              name: "kiero",
              test: /\.css$/,
              chunks: "all",
              enforce: true,
            };
          }

          return config;
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
        plugins: [
          new CleanWebpackPlugin({
            dry: true,
            verbose: true,

            cleanStaleWebpackAssets: false,

            protectWebpackAssets: false,

            cleanOnceBeforeBuildPatterns: [
              "**/*",
              "!static-files*",
              "!directoryToExclude/**",
            ],
            cleanAfterEveryBuildPatterns: ["static*.*", "!static1.js"],

            dangerouslyAllowCleanPatternsOutsideProject: true,
          }),
        ],
        images: {
          domains: [
            "kiero.co",
            "api.kieroapi.net",
            "images-na.ssl-images-amazon.com",
            "localhost",
            "127.0.0.1",
          ],
        },
        eslint: {
          dirs: ["services"], // Solo consultar en "services"
        },
        exportTrailingslash: true,
        exportPathMap: function () {
          const paths = {
            "/": { page: "/" },
          };

          return paths;
        },
        distDir: "_next",
        generateBuildId: async () => {
          if (process.env.BUILD_ID) {
            return process.env.BUILD_ID;
          } else {
            return `${new Date().getTime()}`;
          }
        },
      })
    )
  )
);
