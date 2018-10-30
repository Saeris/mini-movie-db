import { Query } from "react-apollo"
import gql from "graphql-tag"
import { Link } from "react-router-dom"
import { Loading, Layout, OnError } from "../../../../components/structural"
import "./episode.scss"

export const Season = ({ match: { params: { showID, seasonID, episodeID } } }) => (
  <Layout>
    <h1>{`TV Series ID: ${showID} Season ID: ${seasonID} Episode ID: ${episodeID}`}</h1>
  </Layout>
)
