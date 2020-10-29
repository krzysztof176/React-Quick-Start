const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: [
                            '@babel/env',
                            '@babel/preset-react',
                        ],
                        plugins: [
                            '@babel/plugin-proposal-function-bind',
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-proposal-throw-expressions',
                            'react-hot-loader/babel',
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|otf|ttf|eot|woff|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            emitFile: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/'),
    },
    devServer: {
        port: 3000,
        https: true,
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
    },
    performance: {
        hints: false,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'React Quick Start',
            template: './public/index.html',
            filename: './index.html',
        }),
        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: 'public/styles', to: 'styles' },
                    { from: 'public/images', to: 'images' },
                    { from: 'public/favicon.ico', to: 'favicon.ico' },
                ],
            },
        ),
    ],
};
