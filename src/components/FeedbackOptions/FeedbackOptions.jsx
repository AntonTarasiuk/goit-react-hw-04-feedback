// const { Feedbacks } = require("components/FeedbackStats/FeedbackStats");
import PropTypes from 'prop-types'
import styles from "./FeedbackOptions.module.css"


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <h2>Please leave feedback</h2>
            <ul className={styles.buttonsList}>
                <li className={styles.buttonEl}>
                    <button type="button" name={options[0]} onClick={onLeaveFeedback}>Good</button>
                </li>
                <li className={styles.buttonEl}>
                    <button type="button" name={options[1]} onClick={onLeaveFeedback}>Neutral</button>
                </li>
                <li className={styles.buttonEl}>
                    <button type="button" name={options[2]} onClick={onLeaveFeedback}>Bad</button>
                </li>
            </ul>
        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

