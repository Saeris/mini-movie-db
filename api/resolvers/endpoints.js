export default {
  movie: id => `/movie/${id}`,
  movieCredits: id => `/movie/${id}/credits`,
  similarMovies: id => `/movie/${id}/similar`,
  movieVideos: id => `/movie/${id}/videos`,
  person: id => `/person/${id}`,
  personCredits: id => `/person/${id}/combined_credits`,
  searchMovies: `/search/movie`,
  popularMovies: `/movie/popular`
}
