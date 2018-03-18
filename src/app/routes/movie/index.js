import { Movie } from "./movie"

export default {
  path: `/movies/:id`,
  name: `Movie`,
  title: `Movie`,
  component: Movie,
  exact: false,
  nav: false
}
