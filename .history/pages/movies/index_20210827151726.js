import React from 'react'
import { useSelector } from "react-redux"

const Movie = () => {
       const movies = useSelector(state => state.movies )

    return (
        <div>
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
