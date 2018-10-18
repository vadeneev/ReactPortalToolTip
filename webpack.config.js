const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');


module.exports = {
    mode: 'production',
    entry: {
        'index': path.resolve(__dirname, './src/index.js')
    },

    output: {
        filename: './[name].js',
        path: path.resolve(__dirname, './public'),
    },

    resolve: {
        extensions: ['.js', '.jsx', '.less'],
        modules: [path.resolve(__dirname, 'node_modules')],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // both options are optional
            filename: "[name].css",
        })
    ],
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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },

    optimization: {
        splitChunks: {
            name: 'common',
            chunks: 'all'
        }
    },
};