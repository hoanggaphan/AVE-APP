const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin')
  .default;

module.exports = merge(common, {
  mode: 'production',

  plugins: [
    new MiniCssExtractPlugin(), // tách css thành file riêng
    new HTMLInlineCSSWebpackPlugin(), // tiêm css vào head và bỏ file css
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
