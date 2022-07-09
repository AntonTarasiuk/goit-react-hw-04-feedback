import PropTypes from 'prop-types'
import styles from "./FeedbackOptions.module.css"


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <h2>Please leave feedback</h2>
            <ul className={styles.buttonsList}>
                {
                    options.map(option => 
                        <li className={styles.buttonEl}>
                            <button type="button" name={option} onClick={onLeaveFeedback}>{option.charAt(0).toUpperCase() + option.slice(1)}</button>
                        </li>  
                    )
                }
            </ul>
        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

