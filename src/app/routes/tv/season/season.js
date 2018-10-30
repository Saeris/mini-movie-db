import { Query } from "react-apollo"
import gql from "graphql-tag"
import { Link } from "react-router-dom"
import { Loading, Layout, OnError } from "../../../components/structural"
import "./season.scss"

export const Season = ({ match, match: { params: { showID, seasonID } } }) => {
  console.log(match.params)
  return (
    <Layout>
      <h1>{`TV Series ID: ${showID} Season ID: ${seasonID}`}</h1>
      <Link to={`/tv/${showID}/season/${seasonID}/episode/789`}>Episode 789</Link>
    </Layout>
  )
}
