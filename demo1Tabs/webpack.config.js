var path = require('path');
var webpack = require('webpack');
var sassLoader = 'style!css!sass?sourceMap=true&sourceMapContents=true';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './js/app.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      include: [
        path.resolve(__dirname, 'css'),
      ],
      loader: sassLoader
    }],
  },
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
  },
  plugins: [
  
  ],
};
