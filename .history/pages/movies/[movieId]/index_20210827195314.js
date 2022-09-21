import React from 'react'
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

const movieId = () => {
      const { query } = useRouter()
      const movies = useSelector(state => state.movies)

      console.log(router)

      const getMovieById = () => {
          movies.filter(movie => {
             console.log( movie.name === query.movieId )
          } )
      }

      getMovieById()

    return (
        <div>
            <h2> movie details  { query.movieId } </h2>
        </div>
    )
}

export default movieId
