import React from 'react'
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

const movieId = () => {
      const { query } = useRouter()
      const movies = useSelector(state => state.movies)

      const getMovieById = movies.filter(movie =>  movie.name === query.movieId )

      console.log(getMovieById)
      

    return (
        <div>
          {/* { .map(movie => {
              <h2> { movie.name } </h2>
          }) } */}
        </div>
    )
}

export default movieId
