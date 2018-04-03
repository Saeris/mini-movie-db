import { graphqlHapi } from "apollo-server-hapi" // https://github.com/apollographql/apollo-server
// https://www.howtographql.com/advanced/4-security/
import { info, warn } from "winston"
import { deflate } from "graphql-deduplicator"
import { formatError } from "./utilities"
import { schema } from "./schema"

if (typeof process.env.apikey === `undefined`) {
  warn(
    `WARNING: process.env.apikey is not defined. Check README.md for more information`
  ) // eslint-disable-line
}

export default {
  plugin: graphqlHapi,
  options: {
    path: `/graphql`,
    graphqlOptions: ({ payload }) => {
      info(`Received query:`, payload)
      return {
        schema,
        context: {
          apikey: process.env.apikey
        },
        root_value: schema,
        formatError,
        formatResponse: response =>
          response.data && !response.data.__schema
            ? deflate(response.data)
            : response,
        tracing: true,
        debug: true
      }
    },
    route: {
      cors: true
    }
  }
}
