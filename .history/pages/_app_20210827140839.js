import Layout from '../components/Layout'
import '../styles/globals.css'
import { createStore } from "redux"
import { Provider } from "react-redux"

const store = createStore()

function MyApp({ Component, pageProps }) {
  return (
     <Layout>
        <Component {...pageProps} />
     </Layout>
  )
   
}

export default MyApp
