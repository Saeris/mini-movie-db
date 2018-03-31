import { Query } from "react-apollo"
import gql from "graphql-tag"
import format from "date-fns/format"
import { Link } from "react-router-dom"
import { Overlay, PortraitCard, VideoModal } from "../../components/core"
import { Loading, Layout, Modal, OnError } from "../../components/structural"
import "./movie.scss"

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
        id
        name
        character
        profile_path
      }
      crew(limit: 6) {
        id
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
      videos(filter: { site: "YouTube", type: Trailer }) {
        name
        key
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
          similar,
          videos
        } = movie

        return (
          <div className="fullWidth">
            <section id="highlights">
              <Overlay bg={backdrop}>
                <div className="container">
                  <div className="summary">
                    <div className="poster">
                      <img
                        src={`//image.tmdb.org/t/p/w300/${poster}`}
                        alt={title}
                      />
                    </div>
                    <div className="info">
                      <div className="title">
                        <Link to={`/movies/${id}`}>
                          <h1>{title}</h1>
                        </Link>
                        <span>{` (${format(release_date, `YYYY`)})`}</span>
                      </div>
                      <div className="actions">
                        {videos.length && (
                          <VideoModal
                            id={videos[0].key}
                            title={videos[0].name}
                            buttonText="Play Trailer"
                          />
                        )}
                      </div>
                      <div className="overview">
                        <h2>Overview</h2>
                        <p>{overview}</p>
                      </div>
                      <div className="crew">
                        <h2>Featured Crew</h2>
                        <ul>
                          {crew.map(({ id: crewId, name, job }) => (
                            <li>
                              <Link to={`/person/${crewId}`}>
                                <strong>{name}</strong>
                              </Link>
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
                  {cast.map(
                    ({ id: personId, profile_path, name, character }) => (
                      <PortraitCard
                        img={`//image.tmdb.org/t/p/w150_and_h225_bestv2/${profile_path}`}
                        name={name}
                        description={character}
                        link={`/person/${personId}`}
                      />
                    )
                  )}
                </ul>
              </div>
              <div className="cast">
                <h1>Similar Movies</h1>
                <ul>
                  {similar.map(
                    ({ id: similarId, poster, title, release_date }) => (
                      <PortraitCard
                        img={`//image.tmdb.org/t/p/w150_and_h225_bestv2/${poster}`}
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
