import { BarLoader } from "react-spinners"
import "./loading.scss"

export const Loading = () => (
  <span className="loading">
    <BarLoader color="#00d573" />
  </span>
)
