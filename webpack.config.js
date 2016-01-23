var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './js/app.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { 
        test: /\.json$/,
        loader: 'json'
      },
      { 
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
};