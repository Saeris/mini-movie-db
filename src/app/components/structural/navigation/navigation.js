import { NavLink } from "react-router-dom"
import routes from "../../../routes/routes"
import "./navigation.scss"

const logo = `https://www.themoviedb.org/static_cache/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg`

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
