import { Link } from "../../core"
import "./footer.scss"

export const Footer = () => (
  <footer>
    <div className="wrapper">
      <span>
        <strong>
          <Link href="https://www.themoviedb.org/" external>
            The Mini Movie DB
          </Link>
        </strong>{" "}
        powered by{" "}
        <strong>
          <Link
            href="https://codesandbox.io/s/github/Saeris/mini-movie-db"
            external
          >
            Preact
          </Link>
        </strong>{" "}
        and{" "}
        <strong>
          <Link href="https://launchpad.graphql.com/lk3jvvvjnq" external>
            GraphQL
          </Link>
        </strong>
      </span>
      <span>
        Coded with <strong>{`<3`}</strong> by{" "}
        <strong>
          <Link href="https://github.com/Saeris" external>
            Drake Costa
          </Link>
        </strong>
      </span>
    </div>
  </footer>
)
