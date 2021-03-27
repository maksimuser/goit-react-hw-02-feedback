import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
// import styles from './Statistics/Feedback.module.scss';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handleBadFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = () => good + neutral + bad;

    const countPositiveFeedbackPercentage = () =>
      Math.round((good / countTotalFeedback()) * 100);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={{
              goodFeedback: this.handleGoodFeedback,
              neutralFeedback: this.handleNeutralFeedback,
              badFeedback: this.handleBadFeedback,
            }}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
