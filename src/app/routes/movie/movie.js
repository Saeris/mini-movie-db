import { Query } from "react-apollo"
import gql from "graphql-tag"
import { Link } from "react-router-dom"
import { Overlay, PortraitCard, VideoModal } from "../../components/core"
import { Loading, Layout, OnError } from "../../components/structural"
import "./movie.scss"

const getMovie = gql`
  query getMovie($id: ID!) {
    movie(id: $id) {
      id
      title
      overview
      releaseDate @date(as: "YYYY")
      poster {
        custom(size: "w300")
      }
      backdrop {
        custom(size: "w1400_and_h450_face")
        colors {
          darkMuted
        }
      }
      cast(limit: 6) {
        id
        name
        description: character
        img: photo {
          url: custom(size: "w150_and_h225_bestv2")
        }
      }
      crew(limit: 6) {
        id
        name
        job
      }
      similar(limit: 6) {
        id
        name: title
        description: releaseDate @date(as: "MMMM D, YYYY")
        img: poster {
          url: custom(size: "w150_and_h225_bestv2")
        }
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
    <Query query={getMovie} variables={{ id }}>
      {({ loading, error, data: { movie } }) => {
        if (loading) return <Loading />
        if (error) return <OnError errMsg={error} />
        const {
          title,
          overview,
          releaseDate,
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
              <Overlay bg={backdrop.custom}>
                <div className="container">
                  <div className="summary">
                    <div className="poster">
                      <img
                        src={poster.custom}
                        alt={title}
                      />
                    </div>
                    <div className="info">
                      <div className="title">
                        <Link to={`/movies/${id}`}>
                          <h1>{title}</h1>
                        </Link>
                        <span>{` (${releaseDate})`}</span>
                      </div>
                      <div className="actions">
                        {videos.length && (
                          <VideoModal
                            videoId={videos[0].key}
                            name={videos[0].name}
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
                          {crew.map(({ id: creditId, name, job }) => (
                            <li>
                              <Link to={`/person/${creditId}`}>
                                <strong>{name}</strong>
                              </Link>
                              <span>{job.map(hash => Object.values(hash).join(``)).join(`, `)}</span>
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
                    ({ id: personId, img: { url }, name, description }) => (
                      <PortraitCard
                        img={url}
                        name={name}
                        description={description}
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
                    ({ id: similarId, img: { url }, name, description }) => (
                      <PortraitCard
                        img={url}
                        name={name}
                        description={description}
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
