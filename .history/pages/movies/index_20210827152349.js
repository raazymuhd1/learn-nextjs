import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"

const Movie = () => {
       const [ movieName, setMovieName ] = useState("")
       const [ moviePrice, setMoviePrice ] = useState("")

       const movies = useSelector(state => state.movies )

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
             <button onClick={ () => dispatch({ type: "addMovies" }) } > Add New Movies </button>

             { movies.map(movie => (
                 <div>
                    <h2> { movie.name } </h2>
                    <h2> { movie.price} </h2>
                 </div>
             )) }
        </div>
    )
}

export default Movie
