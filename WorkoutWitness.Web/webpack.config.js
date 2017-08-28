var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'wwwroot/build');
var APP_DIR = path.resolve(__dirname, 'WorkoutWitness_UI/containers');

var config = {
    entry: {
        home: path.join(APP_DIR, 'AppContainer.jsx'),
    },
    output: {
        path: BUILD_DIR,
        filename: "[name].js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".css", ".scss"]
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                        modules: true,
                        sourceMap: true,
                        importLoaders: 1,
                        localIdentName: "[name]--[local]--[hash:base64:8]"
                        }
                    },
                    "postcss-loader" // has separate config, see postcss.config.js nearby
                ]
            },
            {
                test: /\.scss$/,
                use: [ "style-loader", "css-loader", "sass-loader" ]
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=8192'
            },
        ]
    },
    // plugins: [{
    //     postcss: () => {
    //         return [
    //         /* eslint-disable global-require */
    //         require('postcss-cssnext'),
    //         /* eslint-enable global-require */
    //         ];
    //     },
    // }]
};

module.exports = config;