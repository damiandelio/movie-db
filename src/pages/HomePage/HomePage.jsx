import React, { useState, useEffect } from 'react';
import MovieItem from '../../components/MovieItem/MovieItem'
import styles from './HomePage.module.scss'
import axios from "axios";
import { GET_DISCOVER_MOVIES_CFG } from '../../apiCalls'

const HomePage = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios(GET_DISCOVER_MOVIES_CFG)
            .then(function (response) {
                // console.log(response.data)
                setMovies(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <React.Fragment>
            <main className={styles.mainContainer}>
                <ul className={styles.moviesContainer}>
                    {movies.map((movie) => (
                        <MovieItem movie={movie} key={movie.id} />
                    ))}
                </ul>
            </main>
        </React.Fragment>
    )
}

export default HomePage;