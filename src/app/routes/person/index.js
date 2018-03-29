import { Person } from "./person"

export default {
  path: `/person/:id`,
  name: `Person`,
  title: `Person`,
  component: Person,
  exact: false,
  nav: false
}
