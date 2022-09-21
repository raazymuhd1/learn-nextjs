import Layout from '../components/Layout'
import '../styles/globals.css'
import { createStore } from "redux"
import { Provider } from "react-redux"

import Themes from "../globalStyle/theme"

import  allReducers from "../reducers"

const store = createStore(allReducers)

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
          <Themes>
             <Component {...pageProps} />
          </Themes>
      </Layout>
    </Provider>
  )
   
}

export default MyApp
