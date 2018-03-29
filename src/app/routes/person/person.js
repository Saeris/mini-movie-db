import { Query } from "react-apollo"
import gql from "graphql-tag"
import format from "date-fns/format"
import { Link } from "react-router-dom"
import { PortraitCard } from "../../components/core"
import { Loading, Layout, OnError } from "../../components/structural"
import "./person.scss"

const fetchPerson = gql`
  query getPerson($id: ID!) {
    person(id: $id) {
      id
      name
      biography
      profile_path
      appearsIn(limit: 6) {
        id
        title
        poster
      }
      workedOn(limit: 6) {
        id
        title
        poster
      }
    }
  }
`

export const Person = ({ match: { params: { id } } }) => (
  <Layout>
    <Query query={fetchPerson} variables={{ id }}>
      {({ loading, error, data: { person } }) => {
        if (loading) return <Loading />
        if (error) return <OnError />
        const {
          name,
          biography,
          profile_path,
          appearsIn,
          workedOn
        } = person

        return (
          <div className="fullWidth">
            <section id="highlights">
              <div className="container">
                <div className="summary">
                  <div className="poster">
                    <img
                      src={`//image.tmdb.org/t/p/w300/${profile_path}`}
                      alt={name}
                    />
                  </div>
                  <div className="info">
                    <div className="title">
                      <Link to={`/person/${id}`}>
                        <h1>{name}</h1>
                      </Link>
                    </div>
                    <div className="overview">
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
              <div className="cast">
                <h1>Appears In</h1>
                <ul>
                  {appearsIn.map(
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
