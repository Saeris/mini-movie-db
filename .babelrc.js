module.exports = {
  "env": {
    "test": {
      "sourceMaps": "inline",
      "plugins": [
        "babel-plugin-istanbul",
        "@babel/plugin-transform-runtime",
        ["babel-plugin-transform-react-jsx", { "pragma": "h" }],
        ["babel-plugin-jsx-pragmatic", { "module": "preact", "export": "h", "import": "h" }]
      ],
      "presets": [
        ["module:ava/stage-4", { "modules": false }],
        ["@babel/preset-env", { "targets": { "node": "8.10" } }],
        "@babel/preset-stage-0"
      ]
    }
  }
}
