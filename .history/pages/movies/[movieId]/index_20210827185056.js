import React from 'react'
import { useRouter } from "next/router"

const movieId = () => {
      const { query } = useRouter()

    return (
        <div>
            <h2> movie details { query.movieId } </h2>
        </div>
    )
}

export default movieId
