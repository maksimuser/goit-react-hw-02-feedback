import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import './styles.scss';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () =>
    this.setState(prevState => ({ good: prevState.good + 1 }));

  handleNeutralFeedback = () =>
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));

  handleBadFeedback = () =>
    this.setState(prevState => ({ bad: prevState.bad + 1 }));

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="Container">
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
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
