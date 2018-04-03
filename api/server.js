import hapi from "hapi" // https://hapijs.com/
import { info, error } from "winston"
import monitor from "./monitor" // Monitoring and Logging
//import limiter from "./limiter" // Rate Limiting
import api from "./api" // GraphQL API Endpoint

const server = new hapi.Server({ routes: { cors: true } })

const plugins = [
  monitor,
  api
]

async function setup() {
  info(`Setting up server...`)
  try {
    await server.register(plugins)
    info(`Successfully setup server!`)
  } catch (err) {
    error(`Failed to setup server:`, err)
  }
}

let loaded = !module.parent

if (loaded) setup()

export default server
