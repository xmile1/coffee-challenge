var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve:{
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', path.resolve(__dirname, 'src')]},
  module: {
     loaders: [
         { test: /(\.js|\.jsx)$/, exclude: /node_modules/, loaders: 'babel-loader',
        query: {
          presets: ['react']
        } },
        {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']}
     ],
   },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
}
