import React from 'react'
import { useSelector } from "react-redux"

const Movie = () => {
       const movies = useSelector(state => state.movies )

       console.log(movies)

    return (
        <div>
             { movies.map(movie => (
                 <h2> { movie.name } </h2>
             )) }
        </div>
    )
}

export default Movie
