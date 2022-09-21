import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import MovieList from '../../components/movieList'

const Movie = () => {
       const [ movieName, setMovieName ] = useState("")
       const [ moviePrice, setMoviePrice ] = useState("")
       const btnRef = useRef();

       const movies = useSelector(state => state.movies )
       const dispatch = useDispatch()
       const { push } = useRouter()

    return (
        <div>
             <input 
             type="text" 
             value={movieName} 
             onChange={e => setMovieName(e.target.value) }
             placeholder="add movies name" />

             <input 
             type="text" 
             value={moviePrice} 
             onChange={e => setMoviePrice(e.target.value) }
             placeholder="set the price"  />
             <button 
             onClick={ () => dispatch({ type: "addMovie", name: movieName, price: moviePrice }) } > Add New Movies </button>

             { movies.map((movie, index) => (
                 <div>
                   <MovieList name={movie.name} btnRef={btnRef}  />
                 </div>
             )) }
        </div>
    )
}

export default Movie