const path = require('path');

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/app.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
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
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};