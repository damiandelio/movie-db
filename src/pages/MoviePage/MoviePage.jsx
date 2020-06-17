import React, { useState, useEffect } from 'react'
import CONSTANTS from '../../constants'
import { GET_MOVIE_CFG, spinnerAxios } from '../../apiCalls'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'


const MoviePage = ({ match }) => {
   const [movie, setMovie] = useState({})
   const history = useHistory();
   const dispatch = useDispatch()

   useEffect(() => {
      spinnerAxios(GET_MOVIE_CFG(match.params.movieid),
         (res) => {
            setMovie(res.data)
         },
         (err) => {
            history.replace('/invalid-movie')
         },
         dispatch
      )
   }, [match, history]);

   return (
      <main>
         {movie.title &&
            <div>
               <h1>{movie.title}</h1>
               <div>Release: {movie.release_date}</div>
               <div>Popularity: {movie.popularity}</div>
               <div>Rate: {movie.vote_average}</div>
               <img src={CONSTANTS.URL_IMG_BASE + movie.poster_path} alt={movie.title} />
               <p>{movie.overview}</p>
            </div>
         }
      </main>
   )
}

export default MoviePage