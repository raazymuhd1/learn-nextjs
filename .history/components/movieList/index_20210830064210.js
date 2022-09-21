import React, { forwardRef } from 'react'

const MovieList = forwardRef(( { name }, ref ) => {
    
    const getRef = () => {
        console.log(ref.current)
    }
    

    return (
        <div>
            <h2> { name } </h2>
            <button ref={ref}> Delete </button>
        </div>
    )
})

export default MovieList
