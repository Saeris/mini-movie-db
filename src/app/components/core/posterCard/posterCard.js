import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/fontawesome-free-solid"
import ClampLines from "react-clamp-lines"
import { Img } from "../img"
import "./posterCard.scss"

export const PosterCard = ({ id, title, img, overview, releaseDate }) => (
  <li className="posterCard">
    <div className="poster">
      {img ? (
        <Link to={`/movies/${id}`}>
          <img src={img.url} alt={title} />
        </Link>
      ) : (
        <FontAwesomeIcon icon={faImage} size="1x" />
      )}
    </div>
    <div className="info">
      <div className="title">
        <Link to={`/movies/${id}`}>
          <h2>{title}</h2>
        </Link>
        <span>{releaseDate}</span>
      </div>
      <ClampLines
        text={overview}
        lines="5"
        buttons={false}
        className="overview"
      />
      <span className="more">
        <Link to={`/movies/${id}`}>More Info</Link>
      </span>
    </div>
  </li>
)
