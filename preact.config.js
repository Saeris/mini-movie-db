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
    require.resolve(`babel-plugin-syntax-dynamic-import`),
    require.resolve(`babel-plugin-transform-object-assign`),
    require.resolve(`babel-plugin-transform-decorators-legacy`),
    require.resolve(`babel-plugin-transform-class-properties`),
    require.resolve(`babel-plugin-transform-export-extensions`),
    require.resolve(`babel-plugin-transform-object-rest-spread`),
    env.isProd && require.resolve(`babel-plugin-transform-react-remove-prop-types`),
    [require.resolve(`babel-plugin-transform-react-jsx`), { pragma: `h` }],
    [require.resolve(`babel-plugin-jsx-pragmatic`), { "module": `preact`, "export": `h`, "import": `h` }]
  ].filter(Boolean)
  config.plugins.push(new CopyWebpackPlugin([
    { from: join(pubDir, `_redirects`) },
    //{ from: join(pubDir, `favicon.ico`), to: `favicon.ico` },
    { context: join(pubDir, `images`), from: `**/*`, to: `images` }
  ]))
}
