import PropTypes from 'prop-types'
import styles from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    console.log(typeof(positivePercentage))
    return (
        <>
            <h2>Statistics</h2>
            {total !== 0 ?
            <ul>
                <li className={styles.statEl}>
                    <p className={styles.statTitle}>Good:</p>
                    <span>{good}</span>
                </li>
                <li className={styles.statEl}>
                    <p className={styles.statTitle}>Neutral:</p>
                    <span>{neutral}</span>
                </li>
                <li className={styles.statEl}>
                    <p className={styles.statTitle}>Bad:</p>
                    <span>{bad}</span>
                </li>
                <li className={styles.statEl}>
                    <p className={styles.statTitle}>Total:</p>
                    <span>{total}</span>
                </li>
                <li className={styles.statEl}>
                    <p className={styles.statTitle}>Positive feedback:</p>
                    <span>{positivePercentage.toFixed(2)}%</span>
                </li>
            </ul>
            : 
            <p>Nothing to render</p>}
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}