const path = require('path');
const manifest = require("./package.json");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Visualizer = require('webpack-visualizer-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        bundle: ["@babel/polyfill", "./src/app.tsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    devServer: {
        port: 9000,
        host: '0.0.0.0',
        open: false
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {loader: "babel-loader"},
                    {loader: "ts-loader"}
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
            template: "./src/assets/index.html"
        })])
        .concat([new CleanWebpackPlugin()])
        .concat([new MiniCssExtractPlugin({filename: "[name].css"})])
};