const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: {
        'index': path.resolve(__dirname, './src/index.js')
    },

    output: {
        filename: './js/[name].js',
        path: path.resolve(__dirname, './public'),
    },

    resolve: {
        extensions: ['.js', '.jsx', '.less'],
        modules: [path.resolve(__dirname, 'node_modules')],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {babelrc: true}
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
};