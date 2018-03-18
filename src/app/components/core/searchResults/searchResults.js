import { Query, graphql } from "react-apollo"
import { Loading, OnError } from "../../structural"
import { PosterCard } from "../"
import gql from "graphql-tag"
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
  query searchMovies($query: String!) {
    movies: search(query: $query) {
      id
      title
      overview
      release_date
      poster
    }
  }
`
const fetchPopular = gql`
  query fetchPopular {
    movies: popular {
      id
      title
      overview
      release_date
      poster
    }
  }
`

const SearchResults = ({ data: { searchQuery, searchVariables } }) => (
  <section id="searchresults">
    <h1>{searchQuery ? `Search Results` : `Popular Movies`}</h1>
    <Query
      query={searchQuery ? searchMovies : fetchPopular}
      variables={searchVariables}
    >
      {({ loading, error, data }) => {
        if (loading) return <Loading />
        if (error) return <OnError />

        return <ul className="movielist">{data.movies.map(PosterCard)}</ul>
      }}
    </Query>
  </section>
)

export default graphql(searchState)(SearchResults)
