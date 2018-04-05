export const api = `//api.themoviedb.org/3`
export const images = `//image.tmdb.org/t/p/`

export const movie = id => `/movie/${id}`
export const movieCredits = id => `/movie/${id}/credits`
export const similarMovies = id => `/movie/${id}/similar`
export const movieSocialMedia = id => `/movie/${id}/external_ids`
export const movieImages = id => `/movie/${id}/images`
export const movieKeywords = id => `/movie/${id}/keywords`
export const movieVideos = id => `/movie/${id}/videos`

export const person = id => `/person/${id}`
export const personCredits = id => `/person/${id}/combined_credits`
export const personSocialMedia = id => `/person/${id}/external_ids`
export const personImages = id => `/person/${id}/images`

export const tv = id => `/tv/${id}`
export const tvCredits = id => `/tv/${tv}/credits`
export const similarShows = id => `/tv/${id}/similar`
export const tvSocialMedia = id => `/tv/${id}/external_ids`
export const tvImages = id => `/tv/${id}/images`
export const tvKeywords = id => `/tv/${id}/keywords`
export const tvVideos = id => `/tv/${id}/videos`

export const season = (show, seasonId) => `/tv/${show}/season/${seasonId}`
export const seasonCredits = (show, seasonId) => `/tv/${show}/season/${seasonId}/credits`
export const seasonImages = (show, seasonId) => `/tv/${show}/season/${seasonId}/images`
export const seasonVideos = (show, seasonId) => `/tv/${show}/season/${seasonId}/videos`

export const episode = (show, seasonId, number) => `/tv/${show}/season/${seasonId}/episode/${number}`
export const episodeCredits = (show, seasonId, number) => `/tv/${show}/season/${seasonId}/episode/${number}/credits`
export const episodeImages = (show, seasonId, number) => `/tv/${show}/season/${seasonId}/episode/${number}/images`
export const episodeVideos = (show, seasonId, number) => `/tv/${show}/season/${seasonId}/episode/${number}/videos`

export const searchMulti = `/search/multi`
export const searchMovies = `/search/movie`
export const searchTVShows = `/search/tv`
export const searchPeople = `/search/person`

export const popularMovies = `/movie/popular`
export const popularPeople = `/person/popular`
export const popularTV = `/tv/popular`

export const nowPlaying = `/movie/now_playing`
export const topRatedMovies = `/movie/top_rated`
export const upcomingMovies = `/movie/upcoming`

export const airingThisWeek = `/tv/on_the_air`
export const airingToday = `/tv/airing_today`
export const topRatedTV = `/tv/top_rated`
