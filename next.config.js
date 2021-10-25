
module.exports = {
  exportTrailingslash: true,
  exportPathMap: function() {
      const paths = {
          "/": { page: "/" },
      };

      return paths;
  }
}

module.exports = {
    distDir: "_next",
    generateBuildId: async () => {
      if (process.env.BUILD_ID) {
        return process.env.BUILD_ID;
      } else {
        return `${new Date().getTime()}`;
      }
    },
  }

const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withCSS( withSass( withImages({
  module: {
      rules: [
          {
              test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/i,
              use: [
                  {
                      loader: 'file-loader',
                  },
              ],
          },
      ],
  },
})));
