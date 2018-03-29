import { render } from "preact"
import { Root } from "./app/routes"
import "./styles/index.scss"

if (typeof window !== `undefined`) {
  render(<Root />, document.getElementById(`root`))
}
