import regeneratorRuntime from "regenerator-runtime" // eslint-disable-line
import ApolloClient from "apollo-client"
import { ApolloLink } from "apollo-link"
import { RetryLink } from "apollo-link-retry"
import { BatchHttpLink } from "apollo-link-batch-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { inflate } from "graphql-deduplicator"

const local =
  location.hostname === `localhost` || // eslint-disable-line
  location.hostname === `127.0.0.1` || // eslint-disable-line
  location.hostname === `` // eslint-disable-line
const dev = process.env.NODE_ENV === `development`

export const client = new ApolloClient({
  link: ApolloLink.from([
    //new RetryLink(),
    new ApolloLink((operation, forward) => forward(operation).map(response => inflate(response))),
    new BatchHttpLink({
      credentials: `include`,
      uri:
        local && dev
          ? `http://localhost:1337/graphql`
          : dev
            ? `https://4kerznk7i1.execute-api.us-west-2.amazonaws.com/dev/graphql`
            : `https://498oek2s4b.execute-api.us-west-2.amazonaws.com/production/graphql`,
      headers: {
        'X-GraphQL-Deduplicate': true
      }
    })
  ]),
  cache: new InMemoryCache({
    dataIdFromObject: result => {
      if (result.id && result.__typename) {
        return result.__typename + result.id
      }
      return null
    }
  }),
  addTypename: true,
  connectToDevTools: dev
})
