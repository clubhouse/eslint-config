module.exports = {
  extends: "eslint:recommended",
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  env: {
    es6: true
  },
  rules: {
    "arrow-body-style": ["error", "always"],
    "arrow-parens": "error",
    "brace-style": ["error", "1tbs"],
    "comma-dangle": "error",
    "comma-spacing": "error",
    curly: "error",
    "dot-notation": "error",
    "eol-last": "error",
    eqeqeq: "error",
    "guard-for-in": "error",
    "key-spacing": ["error", { beforeColon: false }],
    "max-len": ["warn", 120],
    "max-params": ["error", 4],
    "no-console": "off",
    "no-debugger": "warn",
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "no-trailing-spaces": "error",
    "no-useless-escape": "off",
    "no-useless-concat": "error",
    "object-curly-spacing": ["error", "always"],
    "operator-linebreak": ["error", "after"],
    quotes: ["error", "single", "avoid-escape"],
    semi: ["error", "always"],
    "space-before-function-paren": ["error", { anonymous: "always", named: "never" }],
    "space-infix-ops": "error"
  }
};
