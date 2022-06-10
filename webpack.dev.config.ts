import { Configuration as WebpackConfiguration, container as WebpackContainer } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { dependencies } from './package.json';

import commonConfig from './webpack.common.config';

import { merge } from 'webpack-merge';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = merge(commonConfig, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new WebpackContainer.ModuleFederationPlugin({
      name: 'list',
      filename: 'remoteEntry.js',
      exposes: {
        './ListApp': './src/bootstrap'
      },
      shared: dependencies
    })
  ],
  devServer: {
    historyApiFallback: true,
    port: 4001,
    hot: true
  },
  devtool: 'inline-source-map'
});

export default config;
