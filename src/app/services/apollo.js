import regeneratorRuntime from "regenerator-runtime" // eslint-disable-line
import ApolloClient from "apollo-boost"

export const client = new ApolloClient({
  uri: `https://lk3jvvvjnq.lp.gql.zone/graphql`,
  clientState: {
    defaults: {
      searchQuery: false,
      searchVariables: null
    },
    resolvers: {
      Mutation: {
        searchMovies: async (_, { query }, { cache }) => {
          if (query) {
            console.log(`Searching for movies using query:`, query)
          }

          cache.writeData({
            data: {
              searchQuery: query.length,
              searchVariables: query.length
                ? {
                    __typename: `searchVariables`,
                    query
                  }
                : null
            }
          })

          return null
        }
      }
    }
  }
})
