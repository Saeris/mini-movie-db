import { Query } from "react-apollo"
import gql from "graphql-tag"
import format from "date-fns/format"
import { Link } from "react-router-dom"
import { PortraitCard } from "../../components/core"
import { Loading, Layout, OnError } from "../../components/structural"
import { Overlay } from "./backdrop"
import "./movie.scss"

const basePath = `https://image.tmdb.org/t/p/w300/`

const fetchMovie = gql`
  query fetchMovie($id: ID!) {
    movie(id: $id) {
      id
      title
      overview
      release_date
      poster
      backdrop
      cast(limit: 6) {
        name
        character
        profile_path
      }
      crew(limit: 6) {
        name
        job
        profile_path
      }
      similar(limit: 6) {
        id
        title
        release_date
        poster
      }
    }
  }
`

export const Movie = ({ match: { params: { id } } }) => (
  <Layout>
    <Query query={fetchMovie} variables={{ id }}>
      {({ loading, error, data: { movie } }) => {
        if (loading) return <Loading />
        if (error) return <OnError />
        const {
          title,
          overview,
          release_date,
          poster,
          backdrop,
          crew,
          cast,
          similar
        } = movie

        return (
          <div className="fullWidth">
            <section id="highlights">
              <Overlay bg={backdrop}>
                <div className="container">
                  <div className="summary">
                    <div className="poster">
                      <img src={`${basePath}${poster}`} alt={title} />
                    </div>
                    <div className="info">
                      <div className="title">
                        <Link to={`/movies/${id}`}>
                          <h1>{title}</h1>
                        </Link>
                        <span>{` (${format(release_date, `YYYY`)})`}</span>
                      </div>
                      <div className="overview">
                        <h2>Overview</h2>
                        <p>{overview}</p>
                      </div>
                      <div className="crew">
                        <h2>Featured Crew</h2>
                        <ul>
                          {crew.map(({ name, job }) => (
                            <li>
                              <strong>{name}</strong>
                              <span>{job.join(`, `)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Overlay>
            </section>
            <section id="details">
              <div className="cast">
                <h1>Top Billed Cast</h1>
                <ul>
                  {cast.map(({ profile_path, name, character }) => (
                    <PortraitCard
                      img={`//image.tmdb.org/t/p/w138_and_h175_face/${profile_path}`}
                      name={name}
                      description={character}
                    />
                  ))}
                </ul>
              </div>
              <div className="cast">
                <h1>Similar Movies</h1>
                <ul>
                  {similar.map(
                    ({ id: similarId, poster, title, release_date }) => (
                      <PortraitCard
                        img={`//image.tmdb.org/t/p/w138_and_h175_face/${poster}`}
                        name={title}
                        description={format(release_date, `MMMM D, YYYY`)}
                        link={`/movies/${similarId}`}
                      />
                    )
                  )}
                </ul>
              </div>
            </section>
          </div>
        )
      }}
    </Query>
  </Layout>
)
