import React, { forwardRef } from 'react'

const MovieList = forwardRef(( { name }, ref ) => {
    return (
        <div>
            <h2> { name } </h2>
            <button ref={btnRef}> Delete </button>
        </div>
    )
})

export default MovieList
