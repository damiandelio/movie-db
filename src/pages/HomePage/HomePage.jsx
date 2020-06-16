import React, { useState, useEffect } from 'react';
import MovieItem from '../../components/MovieItem/MovieItem'
import styles from './HomePage.module.scss'
import axios from "axios";
import { GET_DISCOVER_MOVIES_CFG } from '../../apiCalls'
import InfiniteScroll from 'react-infinite-scroller';
import Slider from "react-slick";
import CONSTANTS from '../../constants'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {

    const [movies, setMovies] = useState([]);
    const [isMobile, setIsmobile] = useState(true)
    //let isMobile = true;

    useEffect(() => {
        const logg = () => {
            const mq = window.matchMedia("(max-width: 25em)")
            setIsmobile(mq.matches)
        }
        window.addEventListener("resize", logg);
        logg()
        return () => {
            window.removeEventListener("resize", logg);
        };
    }, [])

    const loadFunc = (page) => {
        console.log('page: ' + page)
        axios(GET_DISCOVER_MOVIES_CFG(page))
            .then(function (response) {
                setMovies([...movies, ...response.data.results]);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const settings = {
        infinite: true,
        slidesToShow: isMobile? 1:3,
        //slidesToScroll: isMobile? 1:3,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        //unslick: true
        //dots: true,
        //arrows: true,
        //fade: true,
        //cssEase: 'linear',
        //speed: 200,

    };

    return (
        <React.Fragment>
            <main className={styles.mainContainer}>
                <div className={styles.sliderContainer}>
                    <Slider {...settings} className={styles.slider}>
                        {movies.slice(0,10).map((movie) => (
                            <img className={styles.sliderImg} src={CONSTANTS.URL_IMG_BASE + movie.poster_path} alt={movie.title} />
                        ))}
                    </Slider>
                </div>

                <InfiniteScroll
                    pageStart={1}
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