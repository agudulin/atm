var path = require('path')
var webpack = require('webpack')

var PATH_DIST = path.join(__dirname, 'dist')
var PATH_SRC = path.join(__dirname, 'src')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
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
    }]
  }
}
