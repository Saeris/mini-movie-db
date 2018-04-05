import { makeExecutableSchema } from "graphql-tools"
import { error } from "winston"
import * as resolvers from "./resolvers"
import * as types from "./types"
import * as enums from "./types/enums"
import * as inputs from "./types/inputs"

export const schema = makeExecutableSchema({
  typeDefs: [...Object.values(types), ...Object.values(enums), ...Object.values(inputs)],
  resolvers,
  logger: {
    log: err => error(`An error has occurred while resolving a GraphQL request:`, err)
  }
})
