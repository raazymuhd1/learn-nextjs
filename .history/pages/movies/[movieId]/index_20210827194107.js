import React from 'react'
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

const movieId = () => {
      const { query } = useRouter()
      const movie = useSelector(state => state.movies)

      const getMovieById = () => {

      }

    return (
        <div>
            <h2> movie details { query.movieId } </h2>
        </div>
    )
}

export default movieId
