
const path = require('path')

module.exports = {
  extensions: ['.js', '.jsx', '.css'],
  modules: [path.resolve('./src'), path.resolve('./node_modules')],
}
