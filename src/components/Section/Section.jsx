import React, { Component } from "react";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";

export class Section extends Component {    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleFeedback = (event) => {
        const targetName = event.target.name
        // console.log(targetName)
        this.setState(prevState => {
            for (const key in prevState) {
                if (key === targetName) {
                    return prevState[key] += 1;
                }
            }
            
        })
            // console.log(prevState)
            // [key]: prevState.key + 1
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const totalFeedback = good + neutral + bad;
        return totalFeedback;
        // return Object.values(this.state).reduce((total, value) => total + value, 0);
    }

    countPositiveFeedbackPercentage = () => {
        return this.state.good / this.countTotalFeedback() * 100;
    }    

    render () {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        // const goodFeedbackPercentage = good / this.countTotalFeedback() * 100;

        return (
            <section>
                <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback}/>
                <Statistics 
                    good={good} 
                    neutral={neutral}
                    bad={bad} 
                    total={this.countTotalFeedback()} 
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />
            </section>
        )
    }

}  