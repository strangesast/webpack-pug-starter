const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    allowedHosts: 'all',
  },
});
