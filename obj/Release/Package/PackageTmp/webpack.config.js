﻿/// <binding BeforeBuild='Run - Production' ProjectOpened='Run - Production' />
"use strict";
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

var basePath = __dirname;

module.exports = (env) => {
    return {
        context: path.join(basePath, 'src'),
        resolve: {
            extensions: ['.jsx', '.tsx', '.js']
        },
        entry: {
            app: "./index.tsx",
            appStyles: "./css/site.css",
            vendor: [
                "bootstrap",
                "react",
                "react-dom",
                "react-router",
                "toastr",
                "axios",
            ],
            vendorStyles: [
                "../node_modules/bootstrap/dist/css/bootstrap.css",
                "../node_modules/toastr/build/toastr.css",
            ]
        },
        output: {
            path: path.join(__dirname, 'build'),
            publicPath: '/',
            filename: "[name].bundle.js"
        },
        devServer: {
            contentBase: "./build",
            // host: "localhost",
            // port: 9000
        },
        module: {
            rules: [
                {
                    test: /\.tsx$/,
                    exclude: /node_modules/,
                    loader: "awesome-typescript-loader",
                    options: {
                        useBabel: true,
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: "style-loader" },
                        { loader: "css-loader" },
                    ]
                },
                // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
                // Using here url-loader and file-loader
                {
                    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
                },
            ],


        },
        devtool: "inline-source-map",
        plugins: [

            new webpack.DefinePlugin({
                'process.env': {
                    // This has effect on the react lib size
                    'NODE_ENV': JSON.stringify('production'),
                }
            }),
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: path.resolve('index.html'),
                //hash: true,
            }),
            new webpack.optimize.CommonsChunkPlugin({
                names: ["vendor", "manifest"],
            })
        ]
    }
}
//module.exports = {
    
//    context: path.join(basePath, 'src'),
//    resolve: {
//        extensions: ['.jsx', '.tsx', '.js']
//    },
//    entry: {
//        app: "./index.tsx",
//        appStyles: "./css/site.css",
//        vendor: [
//            "bootstrap",
//            "react",
//            "react-dom",
//            "react-router",
//            "toastr",
//            "axios",
//        ],
//        vendorStyles: [
//            "../node_modules/bootstrap/dist/css/bootstrap.css",
//            "../node_modules/toastr/build/toastr.css",
//        ]
//    },
//    output: {
//        path: path.join(__dirname, 'build'),
//         publicPath: '/',
//        filename: "[name].bundle.js"
//    },
//    devServer: {
//        contentBase: "./build",
//        // host: "localhost",
//        // port: 9000
//    },
//    module: {
//        rules: [
//            {
//                test: /\.tsx$/,
//                exclude: /node_modules/,
//                loader: "awesome-typescript-loader",
//                options: {
//                    useBabel: true,
//                },
//            },
//            {
//                test: /\.css$/,
//                use: [
//                    { loader: "style-loader" },
//                    { loader: "css-loader" },
//                ]
//            },
//            // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
//            // Using here url-loader and file-loader
//            {
//                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
//                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
//            },
//            {
//                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
//                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
//            },
//            {
//                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
//                loader: 'file-loader'
//            },
//            {
//                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
//                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
//            },
//        ],


//    },
//    devtool: "inline-source-map",
//    plugins: [
//        new HtmlWebpackPlugin({
//            filename: "index.html",
//            template: path.resolve('./index.html'),
//            //hash: true,
//        }),
//        new webpack.optimize.CommonsChunkPlugin({
//            names: ["vendor", "manifest"],
//        })
//    ]
//};
