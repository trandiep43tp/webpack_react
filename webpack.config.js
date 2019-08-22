// const path = require('path');

// module.exports = {
//   entry:{
//       bundle: './src/index.js',
//   }, 
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   module: {
//       rules: [
//           {
//               use: 'babel-loader',
//               test: /\.js$/,
//               exclude: 'node_modules'   //bỏ ra thư mục node_module 
//           },
//           {
//               use: [
//                   'style-loader',
//                   'css-loader'
//               ],
//               test: /\.css$/
//           }
//       ]
//   }
// };


const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const VENDOR = [
    'axios',
    'bootstrap',
    'jquery',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-thunk'
]
module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR
    },
    //   entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
       // publicPath: "/dist/",
        filename: "[name].[hash].js"               //sử dụng hash thì khi mở trang 2 file này k có
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor", 
                    chunks: "all"
                }
            }
        }
    },    
    plugins: [
        new CleanWebpackPlugin(),       
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
             title: 'Output Management',
             template: 'src/index.html'
        })
    ]
};
