import lambdaPlayground from "graphql-playground-middleware-lambda"

export const playgroundHandler = lambdaPlayground({
  endpoint: `${process.env.stage ? `/${process.env.stage}` : ``}/graphql`
})
