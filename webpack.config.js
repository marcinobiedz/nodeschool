const path = require('path');

module.exports = {
    entry: "./src/app.js",
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
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};