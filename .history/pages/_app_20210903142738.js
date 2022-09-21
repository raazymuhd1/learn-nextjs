import Layout from '../components/Layout'
import '../styles/globals.css'
import { createStore } from "redux"
import { Provider } from "react-redux"

import Themes from "../globalStyle/theme"

import  allReducers from "../reducers"

const store = createStore(allReducers)

function MyApp({ Component, pageProps }) {
  return (
          <Themes>
    <Provider store={store}>
             {/* <Layout> */}
                <Component {...pageProps} />
            {/* </Layout> */}
    </Provider>
          </Themes>
  )
   
}

export default MyApp
