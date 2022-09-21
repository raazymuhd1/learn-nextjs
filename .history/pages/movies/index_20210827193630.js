import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"

const Movie = () => {
       const [ movieName, setMovieName ] = useState("")
       const [ moviePrice, setMoviePrice ] = useState("")

       const movies = useSelector(state => state.movies )
       const dispatch = useDispatch()
       const { query: { movieId }, push } = useRouter()

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
                    <h2 onClick={() => push(`/movies/${index}`) } > { movie.name } </h2>
                    <button> Delete </button>
                 </div>
             )) }
        </div>
    )
}

export default Movie
