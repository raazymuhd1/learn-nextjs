import Layout from '../components/Layout'
import '../styles/globals.css'
import { createStore } from "redux"
import { Provider } from "react-redux"

import { allReducers } from "../reducers"

const store = createStore(allReducers)

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
       
    </Provider>
     <Layout>
        <Component {...pageProps} />
     </Layout>
  )
   
}

export default MyApp
