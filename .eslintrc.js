module.exports = {
  "env": {
    "browser": true,
    "meteor": true,
    "node": true,
    "mocha": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-uses-vars": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-curly-spacing": [1, "always", {"spacing": {
      "objectLiterals": "never"
    }}],
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],
    "arrow-spacing": [1, { "before": true, "after": true }],
    "indent": [1, 2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": { "var": 2, "let": 2, "const": 3 }
      }
    ],
    "keyword-spacing": [1, { "before": true, "after": true }],
    "key-spacing": [1, { "afterColon": true }],
    "linebreak-style": 0,
    "no-console": 1,
    "no-var": 1,
    "no-trailing-spaces": 1,
    "no-unexpected-multiline": 1,
    "no-use-before-define": [2, { "variables": false }],
    "object-curly-spacing": [1, "always"],
    "prefer-const": 1,
    "quotes": [
      "error",
      "single",
      { "allowTemplateLiterals": true }
    ],
    "semi": [
      "error",
      "never"
    ],
    "space-before-blocks": [1, "always"],
    "space-before-function-paren": [1, { "anonymous": "never", "named": "never", "asyncArrow": "always" }],
    "space-infix-ops": 1,
  }
};
