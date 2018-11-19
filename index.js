module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    sourceType: "module"
  },
  env: {
    es6: true,
  },
  rules: {
    "arrow-body-style": [2, "always"],
    "arrow-parens": 2,
    "brace-style": [2, "1tbs"],
    "comma-dangle": 2,
    "comma-spacing": 2,
    curly: 2,
    "dot-notation": 2,
    "eol-last": 2,
    eqeqeq: 2,
    "guard-for-in": 2,
    "key-spacing": [2, { beforeColon: false }],
    "max-len": [1, 120],
    "max-params": [2, 4],
    "no-console": 0,
    "no-debugger": 1,
    "no-eval": 2,
    "no-implied-eval": 2,
    "no-multiple-empty-lines": [2, { max: 1, maxEOF: 1 }],
    "no-redeclare-func": 2,
    "no-trailing-spaces": 2,
    "no-useless-escape": "off",
    "no-useless-concat": 2,
    "object-curly-spacing": [2, "always"],
    "operator-linebreak": [2, "after"],
    quotes: [2, "single", "avoid-escape"],
    semi: [2, "always"],
    "space-before-function-paren": [2, { anonymous: "always", named: "never" }],
    "space-infix-ops": 2
  }
};
