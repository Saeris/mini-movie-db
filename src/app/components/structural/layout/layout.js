import { Header } from "../header"
import { Footer } from "../footer"
import "./layout.scss"

export const Layout = ({ children }) => (
  <main styleName={`layout`}>
    <Header />
    {children}
    <Footer />
  </main>
)
