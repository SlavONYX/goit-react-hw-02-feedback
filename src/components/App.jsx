import React, { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics//Statistics';

class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
  };

  handleCountFeedback = ({ target }) => {
      const { feedback } = target.dataset;
      this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  totalCountFeedback = () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
  };

  positiveCountFeedback = () => {
      const { good } = this.state;
      const total = this.totalCountFeedback();
      return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
      const { good, neutral, bad } = this.state;
      const total = this.totalCountFeedback();
      const positivePercentage = this.positiveCountFeedback();
      return (
          <div style ={{
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
            fontSize: 40,
          }}
          >
              <Section title="Please leave feedback ">
                  <FeedbackOptions
                      options={Object.keys(this.state)}
                      onLeaveFeedback={this.handleCountFeedback}
                  />
              </Section>
              <Section title="Statistics">
                  <Statistics
                      good={good}
                      neutral={neutral}
                      bad={bad}
                      total={total}
                      positivePercentage={positivePercentage}
                  />
              </Section>
          </div>
      );
  }
}

export default App;
