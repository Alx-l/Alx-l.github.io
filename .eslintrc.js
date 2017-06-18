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
    "prefer-const": 2,
    "space-before-function-paren": [2, "never"]
  }
};
