const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        //'index': ["@babel/polyfill", path.resolve(__dirname, './src/index.js')],
        'main':path.resolve(__dirname, './src/main.js'),
    },

    externals: {
        'react': 'commonjs react',
        'react-dom': 'commonjs react-dom'
    },

    output: {
        filename: './[name].js',
        path: path.resolve(__dirname, './dist'),
        libraryTarget: 'commonjs2'
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
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    }
};