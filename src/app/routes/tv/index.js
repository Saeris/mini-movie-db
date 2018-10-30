import { Directory } from "../directory"
import { TV } from "./tv"
import Season from "./season"

const routes = [
  {
    path: `/tv/:showID`,
    name: `tv`,
    title: `TV`,
    component: TV,
    exact: false,
    nav: false
  },
  ...Season
]

export default {
  path: `/tv`,
  name: `tv`,
  title: `TV`,
  component: () => <Directory paths={routes} />,
  exact: false,
  nav: false
}
