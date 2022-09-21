import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import MovieList from '../../components/movieList'

import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { Person }  from "@material-ui/icons"

const useStyles = makeStyles( (theme) =>  {
    btn: {
        background: theme.palette.primary ,
        marginLeft: "1rem",
    }
})

const Movie = () => {
       const [ movieName, setMovieName ] = useState("")
       const [ moviePrice, setMoviePrice ] = useState("")
       const btnRef = useRef();

       const classes = useStyles()

       const movies = useSelector(state => state.movies )
       const dispatch = useDispatch()
       const { push } = useRouter()

    return (
        <div>
             <input 
             type="text" 
             value={movieName} 
             onChange={e => setMovieName(e.target.value) }
             placeholder="add movies name" />

             <input 
             type="text" 
             value={moviePrice} 
             onChange={e => setMoviePrice(e.target.value) }
             placeholder="set the price"  />
             <Button startIcon={ <Person /> } className={classes.btn} variant="contained" 
             onClick={ () => dispatch({ type: "addMovie", name: movieName, price: moviePrice }) } > Add New Movies </Button>

             { movies.map((movie, index) => (
                 <div>
                   <MovieList name={movie.name} ref={btnRef}  />
                 </div>
             )) }
        </div>
    )
}

export default Movie
