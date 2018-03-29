import fetch from "isomorphic-fetch"
import { info, error } from "winston"
import { memoize } from "../../lib"

const API = `https://api.themoviedb.org/3`

export const query = async ({ apikey, endpoint = ``, options = {} }) => {
  info(`Quering endpoint: ${endpoint} with options:`, options)
  try {
    const qs = Object.entries(options).map(([key, value]) => (value ? `&${`${key}`}=${value}` : ``)).join(``) || ``
    const result = await fetch(`${API}${endpoint}?api_key=${apikey}${qs}`)
    if (result.status !== 200) throw new Error(`Request failed with response code: ${result.status}`)
    const json = await result.json()
    info(`Query recieved result:`, json)
    return json
  } catch (err) {
    error(`Failed to make request to ${endpoint} \n`, err)
  }
}

export const cachedQuery = memoize(query)
