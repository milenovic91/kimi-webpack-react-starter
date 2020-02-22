const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');

const isProduction = false;

const commonConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{loader: 'babel-loader'}]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {modules: true}},
          'sass-loader'
        ]
      },
      {
        test: /\.(ttf|woff|woff2|svg|gif|cur|eot|png|jpg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Test App',
      template: 'index.template.html'
    })
  ]
};

module.exports = merge(commonConfig, isProduction ? prodConfig : devConfig);
