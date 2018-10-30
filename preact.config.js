import { join } from "path"
import CopyWebpackPlugin from "copy-webpack-plugin"
import MinifyPlugin from "babel-minify-webpack-plugin"

const pubDir = join(__dirname, `public`)

export default (config, env, helpers) => {
  if (env.isProd) {
    const { index } = helpers.getPluginsByName(config, `UglifyJsPlugin`)[0]
    config.plugins.splice(index, 1)
    config.plugins.push(new MinifyPlugin({
      keepFnName: false,
      keepClassName: false,
      booleans: true,
      deadcode: true,
      evaluate: true,
      flipComparisons: true,
      mangle: true,
      memberExpressions: true,
      mergeVars: true,
      numericLiterals: true,
      propertyLiterals: true,
      removeConsole: true,
      removeDebugger: true,
      simplify: true,
      simplifyComparisons: true,
      typeConstructors: true,
      undefinedToVoid: true
    }, { sourceMap: null }))
  }
  const { rule: { options: babelConfig } } = helpers.getLoadersByName(config, `babel-loader`)[0]
  babelConfig.plugins = [
    require.resolve(`@babel/plugin-transform-block-scoping`),
    require.resolve(`@babel/plugin-transform-object-assign`),
    [require.resolve(`@babel/plugin-proposal-optional-chaining`), { loose: false }],
    [require.resolve(`@babel/plugin-proposal-decorators`), { legacy: true }],
    [require.resolve(`@babel/plugin-proposal-pipeline-operator`), { proposal: `minimal` }],
    [require.resolve(`@babel/plugin-proposal-nullish-coalescing-operator`), { loose: false }],
    require.resolve(`@babel/plugin-proposal-class-properties`),
    require.resolve(`@babel/plugin-syntax-import-meta`),
    require.resolve(`@babel/plugin-syntax-dynamic-import`),
    require.resolve(`@babel/plugin-proposal-export-default-from`),
    require.resolve(`@babel/plugin-proposal-export-namespace-from`),
    require.resolve(`@babel/plugin-proposal-object-rest-spread`),
    env.isProd && require.resolve(`babel-plugin-transform-react-remove-prop-types`),
    [require.resolve(`@babel/plugin-transform-react-jsx`), { pragma: `h` }],
    [require.resolve(`babel-plugin-jsx-pragmatic`), { "module": `preact`, "export": `h`, "import": `h` }]
  ].filter(Boolean)
  babelConfig.presets = [require.resolve(`@babel/preset-env`)]
  config.plugins.push(new CopyWebpackPlugin([
    { from: join(pubDir, `_redirects`) },
    //{ from: join(pubDir, `favicon.ico`), to: `favicon.ico` },
    { context: join(pubDir, `images`), from: `**/*`, to: `images` }
  ]))
}
