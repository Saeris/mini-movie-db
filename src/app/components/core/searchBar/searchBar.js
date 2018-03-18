import { Mutation } from "react-apollo"
import { withFormik } from "formik"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import { faSearch, faTimes } from "@fortawesome/fontawesome-free-solid"
import Yup from "yup"
import gql from "graphql-tag"
import "./searchBar.scss"

const searchMovies = gql`
  mutation searchMovies($query: String!) {
    searchMovies(query: $query) @client
  }
`

const SearchForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  handleReset,
  values,
  dirty,
  isSubmitting
}) => (
  <form id="searchbar" onSubmit={handleSubmit}>
    <div className="search">
      <button type="submit" disabled={isSubmitting}>
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </button>
      <input
        id="query"
        placeholder="Search for a movie by title..."
        type="text"
        value={values.query}
        onChange={handleChange}
        onBlur={handleBlur}
        autocomplete={false}
      />
      <button
        type="button"
        onClick={() => {
          handleReset()
          values.mutate({ variables: { query: `` } })
        }}
        disabled={!dirty || isSubmitting}
      >
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </button>
    </div>
  </form>
)

const EnhancedForm = withFormik({
  mapPropsToValues: ({ mutate }) => ({ mutate, query: `` }),
  validationSchema: Yup.object().shape({
    query: Yup.string()
  }),
  handleSubmit: ({ query }, { props, setSubmitting, setErrors }) => {
    props.mutate({ variables: { query } }).then(
      () => {
        setSubmitting(false)
      },
      error => {
        setSubmitting(false)
        console.log(`Search form submission failed!`, error)
      }
    )
  },
  displayName: `MovieSearch`
})(SearchForm)

export const SearchBar = () => (
  <Mutation mutation={searchMovies}>
    {mutate => <EnhancedForm mutate={mutate} />}
  </Mutation>
)
