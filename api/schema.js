import { makeExecutableSchema } from "graphql-tools"
import * as resolvers from "./resolvers"
import { typeDefs } from "./types/typeDefs"

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
