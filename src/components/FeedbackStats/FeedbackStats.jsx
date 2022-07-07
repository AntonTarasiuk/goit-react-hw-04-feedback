import React, { Component } from "react";
import styles from "./FeedbackStats.module.css"

export class Feedbacks extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handFeedback = (event) => {
        const taargetName = event.target.name
        this.setState(prevState => {
            return Object.keys(prevState).map(key => key === taargetName && (prevState[key] += 1))
        })
            // console.log(prevState)
            // [key]: prevState.key + 1
    }

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((total, value) => total + value, 0);
    }

    render () {
        const { good, neutral, bad } = this.state;
        const goodFeedbackPercentage = good / this.countTotalFeedback() * 100;

        return (
            <div className={styles.wraper}>
                <section>
                    <h2>Please leave feedback</h2>
                    <ul className={styles.buttonsList}>
                        <li className={styles.buttonEl}>
                            <button type="button" name="good" onClick={this.handFeedback}>Good</button>
                        </li>
                        <li className={styles.buttonEl}>
                            <button type="button" name="neutral" onClick={this.handFeedback}>Neutral</button>
                        </li>
                        <li className={styles.buttonEl}>
                            <button type="button" name="bad" onClick={this.handFeedback}>Bad</button>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Statistics</h2>
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
                            <span>{this.countTotalFeedback()}</span>
                        </li>
                        <li className={styles.statEl}>
                            <p className={styles.statTitle}>Positive feedback:</p>
                            <span>{goodFeedbackPercentage.toFixed(2)}%</span>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }

}  