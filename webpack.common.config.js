"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                        plugins: [[
                                '@babel/plugin-transform-runtime',
                                {
                                    regenerator: true
                                }
                            ]]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};
exports.default = config;
