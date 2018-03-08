var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader', 
        options: {
          presets: ['react', 'env']
        }
      },
      {
        loader: 'style-loader',
        test: /\.css$/,
      },
      {
        loader: 'css-loader',
        test: /\.css$/,
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}