const FileManagerPlugin = require('filemanager-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash:8].js',
  },
  module: {
    rules: [
      { test: /\.(?:css|scss)$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'] },
      { test: /\.(?:js|mjs|cjs)$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
      { test: /\.vue$/, loader: 'vue-loader' },
      // Если html-loader установлен ПОСЛЕ vue-loader, ошибок нет. НЕ МЕНЯЙТЕ ИХ МЕСТАМИ
      { test: /\.html$/, loader: 'html-loader' },
    ],
  },
  plugins: [
    new FileManagerPlugin({ events: { onStart: { delete: ['dist'] } } }),
    new HtmlWebpackPlugin({ filename: 'index.html', template: path.join(__dirname, 'src', 'template.html') }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash:8].css' }),
    new VueLoaderPlugin(),
  ],
};
