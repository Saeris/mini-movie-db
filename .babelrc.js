module.exports = {
  plugins: [
    `@babel/plugin-transform-block-scoping`,
    `@babel/plugin-transform-object-assign`,
    [`@babel/plugin-proposal-optional-chaining`, { loose: false }],
    [`@babel/plugin-proposal-decorators`, { legacy: true }],
    [`@babel/plugin-proposal-pipeline-operator`, { proposal: `minimal` }],
    [`@babel/plugin-proposal-nullish-coalescing-operator`, { loose: false }],
    `@babel/plugin-proposal-class-properties`,
    `@babel/plugin-syntax-import-meta`,
    `@babel/plugin-syntax-dynamic-import`,
    `@babel/plugin-proposal-export-default-from`,
    `@babel/plugin-proposal-export-namespace-from`,
    `@babel/plugin-proposal-object-rest-spread`,
    [`@babel/plugin-transform-react-jsx`, { pragma: `h` }],
    [`babel-plugin-jsx-pragmatic`, { "module": `preact`, "export": `h`, "import": `h` }]
  ],
  presets: [`@babel/preset-env`]
}
