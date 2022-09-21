import React, { forwardRef } from 'react'
import propTypes from "prop-types"

const MovieList = forwardRef(( { name }, ref ) => {
    
    const getRef = () => {
        console.log(ref.current)
    }
    
    return (
        <div>
            <h2> { name } </h2>
            <button ref={ref} onClick={getRef}> Delete </button>
        </div>
    )
})

MovieList.propTypes = {
    name: PropTypes.array.isRequired,
}

export default MovieList
