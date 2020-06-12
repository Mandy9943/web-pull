module.exports = {
    exportTrailingslash: true,
    exportPathMap: function() {
        const paths = {
            "/": { page: "/" },
        };

        return paths;
    }
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