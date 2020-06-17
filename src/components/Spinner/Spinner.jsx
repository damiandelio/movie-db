import React from 'react'
import spinner from '../../images/spinner.png'
import styles from './Spinner.module.scss'
import { useSelector } from 'react-redux';
import { SPINNER_VISIBLE_SELECTOR } from '../../redux/redux_all'

const Spinner = () => {

    const isSpinnerVisible = useSelector(SPINNER_VISIBLE_SELECTOR)

    return (
        <React.Fragment>
            {isSpinnerVisible &&
                <div className={styles.container}>
                    <img src={spinner} alt="Loadding..." />
                </div>}
        </React.Fragment>

    )
}



export default Spinner