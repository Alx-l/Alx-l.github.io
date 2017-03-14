
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const OccurrenceOrderPlugin = webpack.optimize.OccurrenceOrderPlugin

const output = path.resolve(__dirname, '../../public/')


module.exports = {
  entry: ['babel-polyfill', './scripts/app.js'],
  output: {
    path: output,
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  devtool: false,
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx$)/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            query: {
              minimize: {
                calc: {
                  preserve: true
                },
                autoprefixer: false
              },
              url: false,
              sourceMap: false,
              importLoaders: 1,
              modules: true,
              localIdentName: '[local]-[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: path.resolve(__dirname, 'postcss.config.js')
            },
          }]
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new ExtractTextPlugin({ filename: 'css/bundle.css', allChunks: true }),
    new OccurrenceOrderPlugin(),
    new UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false
      }
    })
  ]
}