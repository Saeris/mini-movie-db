module.exports = {
  "env": {
    "test": {
      "sourceMaps": "inline",
      "plugins": [
        "@babel/plugin-transform-runtime",
        "babel-plugin-inline-import-graphql-ast",
        "@babel/plugin-proposal-export-namespace-from",
        ["babel-plugin-transform-react-jsx", { "pragma": "h" }],
        ["babel-plugin-jsx-pragmatic", { "module": "preact", "export": "h", "import": "h" }]
      ],
      "presets": [
        ["@babel/preset-env", { "targets": { "node": "8.10" } }],
        ["@babel/preset-stage-0", { "decoratorsLegacy" : true }]
      ]
    }
  }
}
