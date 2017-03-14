
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const output = path.resolve(__dirname, '../../public/')

module.exports = {
  entry: ['babel-polyfill', './scripts/app.js'],
  output: {
    path: output,
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, '../../public/'),
    port: 9000
  },
  devtool: 'inline-source-map',
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
              url: false,
              sourceMap: true,
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]--[local]-[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader?sourceMap=inline',
            options: {
              config: path.resolve(__dirname, 'postcss.config.js')
            },
          }]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/bundle.css')
  ],
}