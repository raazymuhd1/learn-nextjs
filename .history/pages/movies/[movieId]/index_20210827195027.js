import React from 'react'
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

const movieId = () => {
      const router = useRouter()
      const movies = useSelector(state => state.movies)

      console.log(router)

    //   const getMovieById = () => {
    //       movies.findIndex(movie => {
    //          console.log( movie.id === parseInt(query.movieId) )
    //       } )
    //   }

    //   getMovieById()

    return (
        <div>
            <h2> movie details { query.movieId } </h2>
        </div>
    )
}

export default movieId
