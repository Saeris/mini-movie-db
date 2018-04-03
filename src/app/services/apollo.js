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
    new RetryLink(),
    new ApolloLink((operation, forward) =>
      forward(operation).map(response => inflate(response))
    ),
    new BatchHttpLink({
      uri:
        local && dev
          ? `http://localhost:1337/graphql`
          : dev
            ? `https://y1bhafunj0.execute-api.us-west-2.amazonaws.com/dev/graphql`
            : `https://zfphsew08j.execute-api.us-west-2.amazonaws.com/production/graphql`
    })
  ]),
  cache: new InMemoryCache({
    dataIdFromObject: o => o.id
  }),
  connectToDevTools: true,
  clientState: {
    defaults: {},
    resolvers: {}
  }
})
