import { Query } from "react-apollo"
import gql from "graphql-tag"
import { Link } from "react-router-dom"
import { Loading, Layout, OnError } from "../../components/structural"
import "./tv.scss"

export const TV = ({ match: { params: { showID } } }) => (
  <Layout>
    <h1>{`TV Series ID: ${showID}`}</h1>
    <Link to={`/tv/${showID}/season/456`}>Season 456</Link>
  </Layout>
)
