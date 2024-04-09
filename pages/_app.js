import Nav from "../components/Nav"
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return ( <> <Nav /> <Component {...pageProps} /> </> )
}
