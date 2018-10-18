const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    mode: 'production',

    entry: {
        'main':path.resolve(__dirname, './src/main.js'),
    },

    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    },

    output: {
        filename: './[name].js',
        path: path.resolve(__dirname, './dist'),
        libraryTarget: 'umd',
        publicPath: '/dist/',
        umdNamedDefine: true
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