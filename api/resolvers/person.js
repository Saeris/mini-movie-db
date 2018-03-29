import endpoints from "./endpoints"
import { cachedQuery } from "../utilities"

export const appearsIn = async ({ id }, { limit }, { apikey }) => {
  const { cast } = await cachedQuery({ apikey, endpoint: endpoints.personCredits(id) })
  const roles = cast.slice(0, limit ? limit : cast.length) || []
  const movies = await Promise.all(roles.map(({ id: movieId }) => cachedQuery({ apikey, endpoint: endpoints.movie(movieId) })))
  return movies
}

export const workedOn = async ({ id }, { limit }, { apikey }) => {
  const { crew } = await cachedQuery({ apikey, endpoint: endpoints.personCredits(id) })
  const roles = crew.slice(0, limit ? limit : crew.length) || []
  const movies = await Promise.all(roles.map(({ id: movieId }) => cachedQuery({ apikey, endpoint: endpoints.movie(movieId) })))
  return movies
}
