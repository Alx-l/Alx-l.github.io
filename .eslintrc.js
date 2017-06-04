module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "standard",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },
  "rules": {
    "no-console": 1,
    "no-var": 2,
    "no-unused-vars": [2, { "args": "after-used" }],
    "object-curly-spacing": [2, "always"],
    "prefer-const": 2
  }
};
