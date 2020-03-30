const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');

const isProduction = process.env.NODE_ENV === 'production';

const commonConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // Without this, HtmlWebpackPlugin adds src="main.js" so "deep" paths are trying to resolve
    // script's path like "pathPart1/path/Part2/main.js"
    publicPath: '/'
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
          // TODO - separate this in dev/prod files
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {loader: 'css-loader', options: {
            // modules: true,
            modules: {
              localIdentName: isProduction ? '[hash:base64]' : '[name]__[local]--[hash:base64:5]',
            }
          }},
          'sass-loader'
        ]
      },
      {
        test: /\.(ttf|woff|woff2|svg|gif|cur|eot|png|jpg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'resources/[name].[ext]'
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
    }),
    new MiniCssExtractPlugin({
      filename: `[name].css`,
      chunkFilename: `[name].bundle.css`,
    })
  ]
};

module.exports = merge(commonConfig, isProduction ? prodConfig : devConfig);
