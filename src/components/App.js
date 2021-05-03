import React, {Component} from 'react'
import Statistics from "./Statistics"
import PropTypes from "prop-types"
import Section from './Section'
import FeedbackOptions from './FeedbackOptions'

class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  static defaultProps = {
  
  };
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };
  
  add = event => {
    let feedback = event.target.innerHTML.toLowerCase();
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }
  
  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad
  
  countPositiveFeedbackPercentage = () => Math.ceil(this.state.good * 100 / this.countTotalFeedback())
  
  render() {
    return (
      <>
        <Section title={`Leave a feedback`}>
          <FeedbackOptions add={this.add}/>
        </Section>
        <Section title={`Statistics`}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    )
  }
}

export default App
