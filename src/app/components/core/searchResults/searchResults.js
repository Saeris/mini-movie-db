import { Query, graphql } from "react-apollo"
import gql from "graphql-tag"
import { Loading, OnError } from "../../structural"
import { PosterCard } from "../"
import "./searchResults.scss"

const searchState = gql`
  query searchState {
    searchQuery @client
    searchVariables @client {
      query
    }
  }
`

const searchMovies = gql`
  query searchMovies($query: String!, $page: Int!) {
    movies: search(query: $query, page: $page) {
      id
      title
      overview
      release_date
      poster
    }
  }
`
const fetchPopular = gql`
  query fetchPopular($page: Int!) {
    movies: popular(page: $page) {
      id
      title
      overview
      release_date
      poster
    }
  }
`

const SearchResults = ({ data: { searchQuery, searchVariables } }) => (
  <Query
    query={searchQuery ? searchMovies : fetchPopular}
    variables={{ page: 1, ...searchVariables }}
  >
    {({ loading, error, data, fetchMore }) => {
      if (loading) return <Loading />
      if (error) return <OnError />

      return (
        <section id="searchresults">
          <h1>{searchQuery ? `Search Results` : `Popular Movies`}</h1>
          <ul className="movielist">{data.movies.map(PosterCard)}</ul>
          <button
            className="loadMore"
            onclick={() =>
              fetchMore({
                variables: { page: 2, ...searchVariables },
                updateQuery: (prev, { fetchMoreResult }) =>
                  (fetchMoreResult ? { movies: [...prev.movies, ...fetchMoreResult.movies] } : prev)
              })
            }
          >
            Fetch More
          </button>
        </section>
      )
    }}
  </Query>
)

export default graphql(searchState)(SearchResults)
