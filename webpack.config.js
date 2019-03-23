const path = require('path');
const Visualizer = require('webpack-visualizer-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        bundle: ["@babel/polyfill", "./src/app.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    devServer: {
        port: 9000,
        host: '0.0.0.0',
        contentBase: path.join(__dirname, 'public'),
        open: false
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
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
        .concat([new MiniCssExtractPlugin({filename: "[name].css"})])
};