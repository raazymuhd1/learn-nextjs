import React from 'react'

const MovieList = ( { name } ) => {
    return (
        <div>
            <h2> { name } </h2>
            <button> Delete </button>
        </div>
    )
}

export default MovieList
