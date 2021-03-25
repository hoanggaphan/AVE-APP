const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin')
  .default;

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: '[name].[contenthash].js',
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HTMLInlineCSSWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
});
