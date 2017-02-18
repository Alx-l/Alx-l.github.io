
const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const OccurrenceOrderPlugin = webpack.optimize.OccurrenceOrderPlugin
const DedupePlugin = webpack.optimize.DedupePlugin


module.exports = {
  entry: ['babel-polyfill', './js/app.js'],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'js/bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx$)/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new DedupePlugin(),
    new OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false
      }
    })
  ]
}
