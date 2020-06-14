import React from 'react';
import CONSTANTS from '../../constants'
import styles from "./MovieItem.module.scss";

const MovieItem = ({ movie }) => {
    let posterImg = {
        backgroundImage: `url(${CONSTANTS.URL_IMG_BASE + movie.poster_path})`
    }

    return (
        <li className={styles.movieBox}>
            {/*<div className={styles.moviePosterImg} style={posterImg}></div>*/}
            <img className={styles.movieImg} src={CONSTANTS.URL_IMG_BASE + movie.poster_path} alt={movie.title}/>
            <div className={styles.movieInfo}>
                <h3 className={styles.title}>{movie.title}</h3>
                <p className={styles.description}>{movie.overview}</p>
                <span className={styles.score}>{movie.voteAverage}</span>
            </div>
        </li>
    )
}

export default MovieItem;