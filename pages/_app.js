import Layout from '../components/Layout'
import '../styles/globals.css'

// redux library setup
import { createStore } from "redux"
import { Provider } from "react-redux"

import reducers from "../reducers"

// styled component themes
import Themes from "../globalStyle/theme"

const store = createStore(reducers)

function MyApp({ Component, pageProps }) {
  return (
       <Provider store={store}>
          <Themes>
             <Layout>
                <Component {...pageProps} />
            </Layout>
          </Themes>
        </Provider>
  )
   
}

export default MyApp
