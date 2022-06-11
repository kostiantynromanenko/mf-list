import { Configuration, container as WebpackContainer } from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.common.config';
import { dependencies } from '../package.json';

const config: Configuration = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/list/latest/'
  },
  plugins: [
    new WebpackContainer.ModuleFederationPlugin({
      name: 'list',
      filename: 'remoteEntry.js',
      exposes: {
        './ListApp': `./src/bootstrap`
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies['react']
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom']
        }
      }
    })
  ]
});

export default config;
