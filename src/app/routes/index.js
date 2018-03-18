import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router } from "react-router-dom"
import { client } from "../services"
import { Directory } from "./directory"
import routes from "./routes"

export const Root = () => (
  <ApolloProvider client={client}>
    <Router>
      <Directory paths={routes} />
    </Router>
  </ApolloProvider>
)
