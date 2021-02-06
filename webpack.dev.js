const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',

  output: {
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  devtool: 'eval',

  devServer: {
    hot: true,
    port: 3000,
    publicPath: '/',
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
  },
});
