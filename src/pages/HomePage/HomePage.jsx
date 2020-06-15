import React, { useState } from 'react';
import MovieItem from '../../components/MovieItem/MovieItem'
import styles from './HomePage.module.scss'
import axios from "axios";
import { GET_DISCOVER_MOVIES_CFG } from '../../apiCalls'
import InfiniteScroll from 'react-infinite-scroller';

const HomePage = () => {

    const [movies, setMovies] = useState([]);

    let loadFunc = (page) => {
        console.log('page: ' + page)
        axios(GET_DISCOVER_MOVIES_CFG(page))
            .then(function (response) {
                setMovies([...movies, ...response.data.results]);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <React.Fragment>
            <main className={styles.mainContainer}>
                <InfiniteScroll
                    pageStart={490}
                    loadMore={loadFunc}
                    hasMore={true}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    <ul className={styles.moviesContainer}>
                        {movies.map((movie) => (
                            <MovieItem movie={movie} key={movie.id} />
                        ))}
                    </ul>
                </InfiniteScroll>
            </main>
        </React.Fragment>
    )
}

export default HomePage;