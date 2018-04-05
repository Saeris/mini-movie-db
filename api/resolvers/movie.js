import { movieCredits, similarMovies, movieVideos } from "./endpoints"
import { cachedQuery, filterResults } from "../utilities"

export const status = (parent, args, context) => {
  switch (parent.status) {
    case `In Production`: return `Production`
    case `Post Production`: return `Post`
    default: return parent.status
  }
}

export const cast = async ({ id }, { limit }, { apikey }) => {
  const results = await cachedQuery({ apikey, endpoint: movieCredits(id) })
  return results.cast.slice(0, limit ? limit : results.cast.length) || []
}

export const crew = async ({ id }, { limit }, { apikey }) => {
  const results = await cachedQuery({ apikey, endpoint: movieCredits(id) })
  return results.crew.map((member, i, arr) => ({
    ...member,
    job: arr.filter(person => person.id === member.id).map(({ job }) => job)
  }))
    .reduce((list, member) => (list.findIndex(({ name }) => name === member.name) < 0 ? [...list, member] : list), [])
    .slice(0, limit ? limit : results.crew.length) || []
}

export const similar = async ({ id }, { limit }, { apikey }) => {
  const { results } = await cachedQuery({ apikey, endpoint: similarMovies(id) })
  return results.slice(0, limit ? limit : results.length) || []
}

export const videos = async ({ id }, { filter }, { apikey }) => {
  const { results } = await cachedQuery({ apikey, endpoint: movieVideos(id) })
  return results.filter(filterResults, filter) || []
}

export const score = parent => parent.vote_average

export const votes = parent => parent.vote_count

export const languages = parent => parent.spoken_languages

export const releaseDate = parent => parent.release_date

export const backdrop = parent => parent.backdrop_path

export const poster = parent => parent.poster_path
