/* eslint-env node */
module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "jest": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}
