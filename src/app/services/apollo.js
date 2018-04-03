import regeneratorRuntime from "regenerator-runtime" // eslint-disable-line
import ApolloClient from "apollo-boost"

const local =
  location.hostname === `localhost` || // eslint-disable-line
  location.hostname === `127.0.0.1` || // eslint-disable-line
  location.hostname === `` // eslint-disable-line
const dev = process.env.NODE_ENV === `development`

export const client = new ApolloClient({
  uri:
    local && dev
      ? `http://localhost:1337/graphql`
      : dev
        ? `https://y1bhafunj0.execute-api.us-west-2.amazonaws.com/dev/graphql`
        : `https://zfphsew08j.execute-api.us-west-2.amazonaws.com/production/graphql`,
  clientState: {
    defaults: {},
    resolvers: {}
  }
})
