import { SearchBar, SearchResults } from "../../components/core"
import { Layout } from "../../components/structural"

export const Search = () => {
  return (
    <Layout>
      <SearchBar />
      <SearchResults />
    </Layout>
  )
}

export default Search
