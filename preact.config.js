import { join } from "path"
import CopyWebpackPlugin from "copy-webpack-plugin"

const pubDir = join(__dirname, `public`)

export default (config, env, helpers) => {
  config.plugins.push(new CopyWebpackPlugin([
    { from: join(pubDir, `_redirects`) },
    //{ from: join(pubDir, `favicon.ico`), to: `favicon.ico` },
    { context: join(pubDir, `images`), from: `**/*`, to: `images` }
  ]))
}
