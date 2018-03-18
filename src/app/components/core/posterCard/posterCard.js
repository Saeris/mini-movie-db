import { Link } from "react-router-dom"
import format from "date-fns/format"
import ClampLines from "react-clamp-lines"
import "./posterCard.scss"

export const PosterCard = ({ id, title, poster, overview, release_date }) => (
  <li className="posterCard">
    <div className="poster">
      <Link to={`/movies/${id}`}>
        <img src={`//image.tmdb.org/t/p/w185/${poster}`} alt={title} />
      </Link>
    </div>
    <div className="info">
      <div className="title">
        <Link to={`/movies/${id}`}>
          <h2>{title}</h2>
        </Link>
        <span>{format(release_date, `MMMM D, YYYY`)}</span>
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
