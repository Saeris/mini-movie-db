import * as endpoints from "./endpoints"
import { cachedQuery } from "../utilities"

export const movie = (root, { id }, { apikey }) => cachedQuery({ apikey, endpoint: endpoints.movie(id) })

export const popular = async (root, { page = 1 }, { apikey }) => {
  const { results } = await cachedQuery({ apikey, endpoint: endpoints.popularMovies, options: { page } })
  const movies = await Promise.all(results.map(({ id }) => cachedQuery({ apikey, endpoint: endpoints.movie(id) })))
  return movies
}

export const search = async (root, { query: input, page }, { apikey }) => {
  const { results } = await cachedQuery({ apikey, endpoint: endpoints.searchMovies, options: { query: input, page } })
  const movies = await Promise.all(results.map(({ id }) => cachedQuery({ apikey, endpoint: endpoints.movie(id) })))
  return movies
}

export const person = (root, { id }, { apikey }) => cachedQuery({ apikey, endpoint: endpoints.person(id) })
