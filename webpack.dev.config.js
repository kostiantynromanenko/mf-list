"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var html_webpack_plugin_1 = require("html-webpack-plugin");
var webpack_common_config_1 = require("./webpack.common.config");
var webpack_merge_1 = require("webpack-merge");
var config = (0, webpack_merge_1.merge)(webpack_common_config_1.default, {
    mode: 'development',
    devServer: {
        static: path_1.default.join(__dirname, 'build'),
        port: 4001,
        open: true,
        hot: true
    },
    plugins: [
        new html_webpack_plugin_1.default({
            template: 'public/index.html'
        })
    ]
});
exports.default = config;
// const config: Configuration = {
//   mode: 'development',
//   entry: './src/index',
//   module: {
//     rules: [
//       {
//         test: /\.(ts|js)x?$/i,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
//           }
//         }
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js']
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'public/index.html'
//     }),
//     new WebpackContainer.ModuleFederationPlugin({
//       name: 'listApp',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './List': './src/list/List'
//       },
//       shared: {
//         react: {
//           singleton: true
//         }
//       }
//       // shared: {
//       //   react: { singleton: true, eager: true, requiredVersion: dependencies.react },
//       //   'react-dom': {
//       //     singleton: true,
//       //     eager: true,
//       //     requiredVersion: dependencies['react-dom']
//       //   }
//       // }
//     })
//   ],
//   devtool: 'inline-source-map',
//   devServer: {
//     static: path.join(__dirname, 'build'),
//     historyApiFallback: true,
//     port: 4001,
//     open: true,
//     hot: true
//   }
// };
