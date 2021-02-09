const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
require("@babel/polyfill");

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    target: 'electron-renderer',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: [/\.s[ac]ss$/i, /\.css$/i],
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: 'img', to: 'img' }
                ]
            })
    ]
};