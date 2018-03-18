import { Header, Footer } from "../"
import "./layout.scss"

export const Layout = ({ children }) => (
  <main styleName={`layout`}>
    <Header />
    {children}
    <Footer />
  </main>
)
