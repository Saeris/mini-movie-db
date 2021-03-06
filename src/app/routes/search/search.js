import { Component } from "preact"
import { Formik, Form, Field } from "formik"
import { Query } from "react-apollo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faTimes } from "@fortawesome/fontawesome-free-solid"
import { object, string } from "yup"
import gql from "graphql-tag"
import { PosterCard } from "../../components/core"
import { Layout, Loading, OnError } from "../../components/structural"
import "./search.scss"

const searchMovies = gql`
  query searchMovies($term: String!, $page: Int!) {
    movies: searchMovies(query: $term, page: $page) {
      id
      title
      overview
      releaseDate @date(as: "MMMM D, YYYY")
      img: poster {
        url: custom(size: "w185_and_h278_bestv2")
      }
    }
  }
`
const fetchPopular = gql`
  query fetchPopular($page: Int!) {
    movies: popularMovies(page: $page) {
      id
      title
      overview
      releaseDate @date(as: "MMMM D, YYYY")
      img: poster {
        url: custom(size: "w185_and_h278_bestv2")
      }
    }
  }
`

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: fetchPopular,
      header: `Popular Movies`,
      term: ``,
      page: 1
    }
  }

  render(props, { query, header, term, page }) {
    return (
      <Layout>
        <Formik
          displayName="MovieSearch"
          validationSchema={object().shape({
            term: string()
          })}
          onSubmit={({ term }, { setSubmitting, setErrors }) => {
            this.setState({
              query: searchMovies,
              header: `Search Results`,
              term,
              page: 1
            })
            setSubmitting(false)
          }}
          onReset={() => {
            this.setState({
              query: fetchPopular,
              header: `Popular Movies`,
              term: ``,
              page: 1
            })
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            handleReset,
            values,
            dirty,
            isSubmitting
          }) => (
            <Form id="searchbar">
              <div className="search">
                <button type="submit" disabled={isSubmitting}>
                  <FontAwesomeIcon icon={faSearch} size="2x" />
                </button>
                <Field
                  id="term"
                  name="term"
                  placeholder="Search for a movie by title..."
                  type="text"
                  autocomplete={false}
                />
                <button
                  type="button"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  <FontAwesomeIcon icon={faTimes} size="2x" />
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <Query query={query} variables={{ page: 1, term }}>
          {({ loading, error, data, fetchMore }) => {
            if (loading) return <Loading />
            if (error) return <OnError errMsg={error} />

            return (
              <section id="searchresults">
                <h1>{header}</h1>
                <ul className="movielist">{data.movies.map(PosterCard)}</ul>
                <button
                  className="loadMore"
                  onclick={() =>
                    fetchMore({
                      variables: { page: page + 1, term },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        this.setState({
                          page: page + 1
                        })
                        return fetchMoreResult
                          ? {
                            movies: [
                              ...prev.movies,
                              ...fetchMoreResult.movies
                            ]
                          }
                          : prev
                      }
                    })
                  }
                >
                  Fetch More
                </button>
              </section>
            )
          }}
        </Query>
      </Layout>
    )
  }
}
