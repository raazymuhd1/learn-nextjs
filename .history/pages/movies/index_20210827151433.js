import React from 'react'
import { useSelector } from "react-redux"

const movie = () => {
       const movies = useSelector(state => state.movies )

       console.log(movies)

    return (
        <div>
            
        </div>
    )
}

export default movies
