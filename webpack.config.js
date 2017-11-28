var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "./build/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader" },
            { test: /\.ejs$/, loader: "ejs-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
            { test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, loader: "url-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Backbone itunes cart',
            filename: './build/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000
    }
};
