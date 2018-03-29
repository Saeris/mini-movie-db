import { Link } from "../../core"
import "./footer.scss"

const dev = process.env.NODE_ENV === `development`

export const Footer = () => (
  <footer>
    <div className="wrapper">
      <span>
        <strong>
          <Link href="https://www.themoviedb.org/" external>
            The Mini Movie DB
          </Link>
        </strong>{` `}
        powered by{` `}
        <strong>
          <Link
            href={
              dev
                ? `https://codesandbox.io/s/github/Saeris/mini-movie-db/tree/develop`
                : `https://codesandbox.io/s/github/Saeris/mini-movie-db`
            }
            external
          >
            Preact
          </Link>
        </strong>{` `}
        and{` `}
        <strong>
          <Link
            href={
              dev
                ? `https://y1bhafunj0.execute-api.us-west-2.amazonaws.com/dev/graphql`
                : `https://zfphsew08j.execute-api.us-west-2.amazonaws.com/production/playground`
            }
            external
          >
            GraphQL
          </Link>
        </strong>
      </span>
      <span>
        Coded with <strong>{`<3`}</strong> by{` `}
        <strong>
          <Link href="https://github.com/Saeris" external>
            Drake Costa
          </Link>
        </strong>
      </span>
    </div>
  </footer>
)
