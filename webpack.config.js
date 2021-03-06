'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './client/main.js',
  output: {
    path: __dirname,
    filename: './public/js/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test:/\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
