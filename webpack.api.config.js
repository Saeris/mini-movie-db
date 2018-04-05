const { join } = require(`path`)
const slsw = require(`serverless-webpack`) // https://github.com/serverless-heaven/serverless-webpack
const nodeExternals = require(`webpack-node-externals`) // https://github.com/liady/webpack-node-externals

module.exports = {
  mode: slsw.lib.webpack.isLocal ? `production` : `development`,
  entry: slsw.lib.entries,
  target: `node`,
  externals: [nodeExternals()],
  devtool: `nosources-source-map`,
  output: {
    libraryTarget: `commonjs`,
    path: join(__dirname, `.webpack`),
    filename: `[name].js`,
    sourceMapFilename: `[file].map`
  },
  stats: {
    colors: true,
    reasons: false,
    chunks: false
  },
  performance: {
    hints: false
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: `babel-loader`,
        exclude: /node_modules/,
        options: {
          babelrc: false,
          plugins: [require(`@babel/plugin-transform-runtime`)],
          presets: [
            [require(`@babel/preset-env`), { targets: { node: `8.10` } }],
            require(`@babel/preset-stage-0`)
          ]
        }
      },
      { test: /\.(graphql|gql)$/, exclude: /node_modules/, loader: `graphql-tag/loader` }
    ]
  }
}
