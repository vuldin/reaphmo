let path = require('path')
let webpack = require('webpack')
let TARGET = process.env.npm_lifecycle_event
let mergecat = require('./src/util').mergecat

let exp = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,loaders: ['babel'],include: path.join(__dirname, 'src') }
    ]
  }
}
if(TARGET === 'start') exp = mergecat(exp,{
  entry: [
    'webpack-dev-server/client?http://localhost:3000'
  ]
})
if(TARGET === 'build') exp = mergecat(exp,{
})
//console.log('exp',exp)
module.exports = exp
