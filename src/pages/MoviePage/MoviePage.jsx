import React, { useState, useEffect } from 'react'
import CONSTANTS from '../../constants'
import { GET_MOVIE_CFG } from '../../apiCalls'
import axios from 'axios'
import { useHistory } from "react-router-dom";
// components
import Spinner from '../../components/Spinner/Spinner'


const MoviePage = ({ match }) => {
   const [movie, setMovie] = useState({})

   const history = useHistory();

   useEffect(() => {
      axios(GET_MOVIE_CFG(match.params.movieid))
         .then((res) => {
            setMovie(res.data)
         })
         .catch((err) => {
            history.replace('/invalid-movie')
         })
   }, [match.params.movieid, movie, history]);

   return (
      <main>
         {movie.title ?
            <div>
               <h1>{movie.title}</h1>
               <div>Release: {movie.release_date}</div>
               <div>Popularity: {movie.popularity}</div>
               <div>Rate: {movie.vote_average}</div>
               <img src={CONSTANTS.URL_IMG_BASE + movie.poster_path} alt={movie.title} />
               <p>{movie.overview}</p>
            </div>
            :
            <Spinner />
         }
      </main>
   )
}

export default MoviePage