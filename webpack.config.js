const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [ new HtmlWebpackPlugin({ template: './src/index.pug', }) ],
  module: {
    rules: [ { test: /\.pug$/, loader: 'pug-loader' } ]
  },
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
};
