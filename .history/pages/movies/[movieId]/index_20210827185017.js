import React from 'react'
import { useRouter } from "next/router"

const movieId = () => {
      const { query } = useRouter()

      console.log(query)

    return (
        <div>
            <h2>  </h2>
        </div>
    )
}

export default movieId
