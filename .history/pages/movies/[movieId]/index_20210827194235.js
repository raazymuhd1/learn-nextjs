import React from 'react'
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

const movieId = () => {
      const { query } = useRouter()
      const movies = useSelector(state => state.movies)

      const getMovieById = () => {
          movies.findIndex(movie => {
             console.log( movie.id === parseInt(query.movieId) )
          } )
      }

      getMovieById()

    return (
        <div>
            <h2> movie details { query.movieId } </h2>
        </div>
    )
}

export default movieId
