import { personCredits, movie } from "./endpoints"
import { cachedQuery } from "../utilities"

export const appearsIn = async ({ id }, { limit }, { apikey }) => {
  const { cast } = await cachedQuery({ apikey, endpoint: personCredits(id) })
  const roles = cast.slice(0, limit ? limit : cast.length) || []
  const movies = await Promise.all(roles.map(({ id: movieId }) => cachedQuery({ apikey, endpoint: movie(movieId) })))
  return movies
}

export const workedOn = async ({ id }, { limit }, { apikey }) => {
  const { crew } = await cachedQuery({ apikey, endpoint: personCredits(id) })
  const roles = crew.slice(0, limit ? limit : crew.length) || []
  const movies = await Promise.all(roles.map(({ id: movieId }) => cachedQuery({ apikey, endpoint: movie(movieId) })))
  return movies
}

export const photo = parent => parent.profile_path
