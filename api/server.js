import hapi from "hapi" // https://hapijs.com/
import { info, error } from "winston"
import monitor from "./monitor" // Monitoring and Logging
import api from "./api" // GraphQL API Endpoint

const server = new hapi.Server()
server.connection({ routes: { cors: true } })

const plugins = [
  monitor,
  api
]
let loaded
server.makeReady = onServerReady => {
  info(`Setting up server...`)
  try {
    if (!loaded) { // eslint-disable-line
      server.register(plugins, onServerReady)
      loaded = true
    } else {
      onServerReady()
    }
    info(`Successfully setup server!`)
  } catch (err) {
    error(`Failed to setup server:`, err)
  }
}

export default server
