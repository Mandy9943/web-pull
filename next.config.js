const path = require('path')

const withCSS = require('@zeit/next-css');
const withSass = require('sass');
const withImages = require('next-images');
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins')

const nextConfig = {
    images: {
        disableStaticImages: true,
        domains: ['kiero.co', 'api.kieroapi.net', 'images-na.ssl-images-amazon.com', 'localhost', '127.0.0.1']
    },
    exportTrailingslash: true,
    exportPathMap: function () {
        const paths = {
            "/": {page: "/"},
        };

        return paths;
    },
    generateBuildId: async () => {
        if (process.env.BUILD_ID) {
            return process.env.BUILD_ID;
        } else {
            return `${new Date().getTime()}`;
        }
    },
    distDir: "_next",
    sassOptions: {
        includePaths: [path.join(__dirname)],
    },
    cssOptions: {
        includePaths: [path.join(__dirname)],
    },
}
const plugins = [
    [withCSS],
    [withSass],
    [withImages],
    [withOptimizedImages, {
        responsive: {
            adapter: require('responsive-loader/sharp')
        },
        webpack: (config, options) => {
            config.optimization.splitChunks.styles = {}
            return config;
        }
    }],
]

module.exports = withPlugins(plugins, nextConfig)