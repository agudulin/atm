var path = require('path')
var webpack = require('webpack')

var cssnext = require('postcss-cssnext')
var nested = require('postcss-nested')

var PATH_DIST = path.join(__dirname, 'dist')
var PATH_SRC = path.join(__dirname, 'src')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  resolve: {
    root: path.resolve(PATH_SRC),
    extensions: ['', '.js']
  },
  output: {
    path: PATH_DIST,
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: PATH_SRC
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader'],
      include: PATH_SRC
    }]
  },
  postcss: function () {
    return [cssnext, nested]
  }
}
