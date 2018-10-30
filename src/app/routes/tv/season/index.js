import { Season } from "./season"
import Episode from "./episode"

export default [
  {
    path: `/tv/:showID/season/:seasonID`,
    name: `season`,
    title: `Season`,
    component: Season,
    exact: false,
    nav: false
  },
  Episode
]
