import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import './styles.scss';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <div className="Container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.handleFeedback}
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
