const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: ['./src/assets/js/index.js', './src/assets/scss/pages/index.scss'],
    brand: ['./src/assets/js/brand.js', './src/assets/scss/pages/brand.scss'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'asset/images/[base]',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/views/index.html',
      chunks: ['index'],
      inject: 'body',
      scriptLoading: 'blocking',
    }),
    new HtmlWebpackPlugin({
      filename: 'brand.html',
      template: './src/views/brand.html',
      chunks: ['brand'],
      inject: 'body',
      scriptLoading: 'blocking',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
