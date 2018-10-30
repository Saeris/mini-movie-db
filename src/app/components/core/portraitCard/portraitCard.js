import { Link } from "react-router-dom"
import { Img } from "../img"
import "./portraitCard.scss"

export const PortraitCard = ({ img = ``, name = ``, description = ``, link = `` }) => (
  <li className="portraitCard">
    <Link to={link}>
      <img src={img} alt={name} />
    </Link>
    <strong>
      <Link to={link}>{name}</Link>
    </strong>
    <span>{description}</span>
  </li>
)
