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
            // Simulate the removal of files
            //
            // default: false
            dry: true,

            // Write Logs to Console
            // (Always enabled when dry is true)
            //
            // default: false
            verbose: true,

            // Automatically remove all unused webpack assets on rebuild
            //
            // default: true
            cleanStaleWebpackAssets: false,

            // Do not allow removal of current webpack assets
            //
            // default: true
            protectWebpackAssets: false,

            // **WARNING**
            //
            // Notes for the below options:
            //
            // They are unsafe...so test initially with dry: true.
            //
            // Relative to webpack's output.path directory.
            // If outside of webpack's output.path directory,
            //    use full path. path.join(process.cwd(), 'build/**/*')
            //
            // These options extend del's pattern matching API.
            // See https://github.com/sindresorhus/del#patterns
            //    for pattern matching documentation

            // Removes files once prior to Webpack compilation
            //   Not included in rebuilds (watch mode)
            //
            // Use !negative patterns to exclude files
            //
            // default: ['**/*']
            cleanOnceBeforeBuildPatterns: [
              "**/*",
              "!static-files*",
              "!directoryToExclude/**",
            ],
            cleanOnceBeforeBuildPatterns: [], // disables cleanOnceBeforeBuildPatterns

            // Removes files after every build (including watch mode) that match this pattern.
            // Used for files that are not created directly by Webpack.
            //
            // Use !negative patterns to exclude files
            //
            // default: []
            cleanAfterEveryBuildPatterns: ["static*.*", "!static1.js"],

            // Allow clean patterns outside of process.cwd()
            //
            // requires dry option to be explicitly set
            //
            // default: false
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
        // "**/*.js?(x)": (filenames) =>
        //   `next lint --fix --file ${filenames
        //     .map((file) => file.split(process.cwd())[1])
        //     .join(" --file ")}`,

        eslint: {
          dirs: ["services"], // Solo consultar en "services"
        },
      })
    )
  )
);
