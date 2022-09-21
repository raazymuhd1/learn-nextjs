import { combineReducers } from "redux"
import { movies } from './movies'
import { download } from './download'

const allReducers =  combineReducers({
       movies,
       download
})

export default allReducers;