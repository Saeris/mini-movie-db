import { Query } from "react-apollo"
import gql from "graphql-tag"
import { Link } from "react-router-dom"
import { PortraitCard } from "../../components/core"
import { Loading, Layout, OnError } from "../../components/structural"
import "./person.scss"

const getPerson = gql`
  query getPerson($id: ID!) {
    person(id: $id) {
      id
      name
      biography
      photo {
        custom(size: "w300")
      }
      appearsIn(limit: 6) {
        ... on Movie {
          id
          title
          releaseDate @date(as: "MMMM D, YYYY")
          poster {
            custom(size: "w150_and_h225_bestv2")
          }
        }
        ... on TV {
          id
          title: name
          releaseDate: firstAired @date(as: "MMMM D, YYYY")
          poster {
            custom(size: "w150_and_h225_bestv2")
          }
        }
      }
      workedOn(limit: 6) {
        ... on Movie {
          id
          title
          releaseDate @date(as: "MMMM D, YYYY")
          poster {
            custom(size: "w150_and_h225_bestv2")
          }
        }
        ... on TV {
          id
          title: name
          releaseDate: firstAired @date(as: "MMMM D, YYYY")
          poster {
            custom(size: "w150_and_h225_bestv2")
          }
        }
      }
    }
  }
`

export const Person = ({ match: { params: { id } } }) => (
  <Layout>
    <Query query={getPerson} variables={{ id }}>
      {({ loading, error, data: { person } }) => {
        if (loading) return <Loading />
        if (error) return <OnError errMsg={error} />
        const {
          name,
          biography,
          photo,
          appearsIn,
          workedOn
        } = person

        return (
          <div className="fullWidth">
            <section id="highlights">
              <div className="container">
                <div className="summary">
                  <div className="poster">
                    <img src={photo.custom} alt={name} />
                  </div>
                  <div className="info">
                    <div className="name">
                      <Link to={`/person/${id}`}>
                        <h1>{name}</h1>
                      </Link>
                    </div>
                    <div className="biography">
                      <h2>Biography</h2>
                      <p>{biography}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="details">
              <div className="cast">
                <h1>Worked On</h1>
                <ul>
                  {workedOn.map(
                    ({ id: movieId, poster, title, releaseDate }) => (
                      <PortraitCard
                        img={poster && poster.custom}
                        name={title}
                        description={releaseDate ? releaseDate : `TBA`}
                        link={`/movies/${movieId}`}
                      />
                    )
                  )}
                </ul>
              </div>
              <div className="cast">
                <h1>Appears In</h1>
                <ul>
                  {appearsIn.map(
                    ({ id: movieId, poster, title, releaseDate }) => (
                      <PortraitCard
                        img={poster && poster.custom}
                        name={title}
                        description={releaseDate ? releaseDate : `TBA`}
                        link={`/movies/${movieId}`}
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
