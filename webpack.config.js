const path = require('path');
const manifest = require("./package.json");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Visualizer = require('webpack-visualizer-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        bundle: ["./src/app.tsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        library: "[name]"
    },
    devServer: {
        port: 9000,
        host: '0.0.0.0',
        open: false
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {loader: "ts-loader"}
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [new Visualizer()]
        .concat([new webpack.DefinePlugin({
            $VERSION: JSON.stringify(manifest.version)
        })])
        .concat([new HtmlWebpackPlugin({
            template: "./src/assets/index.html",
            title: "My app",
            inject: "head"
        })])
        .concat([new CleanWebpackPlugin()])
        .concat([new MiniCssExtractPlugin({filename: "[name].css"})])
};