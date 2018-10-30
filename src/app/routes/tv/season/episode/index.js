import { Episode } from "./episode"

export default {
  path: `/tv/:showID/season/:seasonID/episode:episodeID`,
  name: `episode`,
  title: `Episode`,
  component: Episode,
  exact: false,
  nav: false
}
