
const path = require('path')

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
  }
}
