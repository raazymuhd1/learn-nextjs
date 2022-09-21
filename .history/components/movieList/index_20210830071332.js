import React, { forwardRef } from 'react'
import PropTypes from "prop-types"

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
    name: PropTypes.string.isRequired,
}

export default MovieList
