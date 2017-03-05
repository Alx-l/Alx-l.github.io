module.exports = {
  'use': ['postcss-import', 'postcss-mixins', 'postcss-cssnext', 'postcss-reporter', 'postcss-inline-svg', 'rucksack-css', 'postcss-flexbox', 'postcss-pxtorem', 'css-mqpacker'],
  'input': 'styles/style.css',
  'output': 'public/css/bundle.css',
  'map': true,
  'watch': true,
  'local-plugins': true,
  'postcss-inline-svg': {
    path: 'public/'
  },
  'postcss-pxtorem': {
    'rootValue': 16,
    'unitPrecision': 5,
    'propWhiteList': [],
    'mediaQuery': true,
    'replace': true
  },
  'css-mqpacker': {
    'sort': true
  }
}