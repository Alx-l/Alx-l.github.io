
const path = require('path')

module.exports = {
  extensions: ['.js', '.jsx', '.css'],
  alias: {
    reusableComponents: path.resolve(__dirname, '../../scripts/reusableComponents'),
    settings: path.resolve(__dirname, '../../scripts/settings.js'),
    svg: path.resolve(__dirname, '../../scripts/svg.jsx'),
    utils: path.resolve(__dirname, '../../scripts/utils'),
    views: path.resolve(__dirname, '../../scripts/views')
  }
}
