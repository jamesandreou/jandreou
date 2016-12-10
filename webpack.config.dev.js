var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"]
    },
    {
      test: /\.css$/,
      loader: 'style!css?modules',
      include: /flexboxgrid/,
    },
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }]
  }
};
