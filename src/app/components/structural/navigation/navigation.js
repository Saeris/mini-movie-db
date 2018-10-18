import { NavLink } from "react-router-dom"
import routes from "../../../routes/routes"
import "./navigation.scss"

const logo = `https://www.themoviedb.org/assets/1/v4/logos/powered-by-square-green-11c0c7f8e03c4f44aa54d5e91d9531aa9860a9161c49f5fa741b730c5b21a1f2.svg`

export const Navigation = () => (
  <ul className="navigation">
    <li>
      <NavLink to="/">
        <img id="logo" src={logo} alt="Home" />
      </NavLink>
    </li>
    {routes.filter(route => route.nav).map(({ path, title }) => (
      <li>
        <NavLink to={path}>{title}</NavLink>
      </li>
    ))}
  </ul>
)
