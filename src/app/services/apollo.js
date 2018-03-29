import regeneratorRuntime from "regenerator-runtime" // eslint-disable-line
import ApolloClient from "apollo-boost"

const local = (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "")
const dev = process.env.NODE_ENV === `development`

export const client = new ApolloClient({
  uri: (local && dev)
    ? `http://localhost:1337/graphql`
    : `https://y1bhafunj0.execute-api.us-west-2.amazonaws.com/${dev ? `dev` : `prod`}/graphql`,
  clientState: {
    defaults: {
      searchQuery: false,
      searchVariables: null
    },
    resolvers: {
      Mutation: {
        searchMovies: (_, { query }, { cache }) => {
          if (query) {
            console.log(`Searching for movies using query:`, query)
          }

          cache.writeData({
            data: {
              searchQuery: query.length,
              searchVariables: query.length
                ? { __typename: `searchVariables`, query }
                : null
            }
          })

          return null
        }
      }
    }
  }
})
