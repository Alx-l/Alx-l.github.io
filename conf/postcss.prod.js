module.exports = {
  'use': ['postcss-import', 'postcss-mixins', 'postcss-cssnext', 'postcss-inline-svg', 'rucksack-css', 'postcss-flexbox', 'postcss-pxtorem', 'css-mqpacker', 'cssnano'],
  'input': 'styles/style.css',
  'output': 'public/css/bundle.css',
  'watch': false,
  'local-plugins': true,
  'postcss-cssnext': {
    'browsers': 'last 2 versions'
  },
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
  },
  'cssnano': {
    'calc': {
      'preserve': true
    },
    'autoprefixer': false
  }
}