import React, { forwardRef } from 'react'

const MovieList = forwardRef(( { name }, btnRef ) => {
    
    const getRef = () => {
        console.log(btnRef.current)
    }
    

    return (
        <div>
            <h2> { name } </h2>
            <button ref={btnRef} onClick={getRef}> Delete </button>
        </div>
    )
})

export default MovieList
