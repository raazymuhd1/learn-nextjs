import React from 'react'
import { useRouter } from "next/router"

const movieId = () => {
      const { query } = useRouter()

    return (
        <div>
            <h2> details movie { query }  </h2>
        </div>
    )
}

export default movieId
