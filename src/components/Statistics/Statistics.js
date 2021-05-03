import React from 'react'
import styles from "./Statistics.module.css";
import PropTypes from 'prop-types'

let Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <>
      {
        total <= 0
          ? <h3>No feedback given</h3>
          : <ul className={styles}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad : {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feeds: {positivePercentage}%</li>
          </ul>
      }
    </>
  )
}

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}

export default Statistics