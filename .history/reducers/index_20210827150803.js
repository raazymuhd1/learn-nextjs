import { combineReducers } from "redux"
import { movies } from './movies'

const allReducers =  combineReducers({
       movies,
})

export default allReducers;