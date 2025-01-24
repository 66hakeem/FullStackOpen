import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {

  const all = good + neutral + bad
  const average = ((good - bad) / all).toFixed(1)
  const positive = ((good/all)*100).toFixed(1)

  if (all == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } 
  return (
    <table>
      <tbody>
        <StatisticLine text={'Good'} value={good} />
        <StatisticLine text={'Neutral'} value={neutral} />
        <StatisticLine text={'Bad'} value={bad} />
        <StatisticLine text={'All'} value={good + neutral + bad} />
        <StatisticLine text={'Average'} value={average} />
        <StatisticLine text={'Positive'} value={positive + '%'} />
      </tbody>
    </table>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td> {props.value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button onClick={() => setGood(good + 1)} text={'Good'} />
      <Button onClick={() => setNeutral(neutral + 1)} text={'Neutral'} />
      <Button onClick={() => setBad(bad + 1)} text={'Bad'} />

    <h1>Statistics</h1>

    <Statistics 
          good = {good} 
          neutral = {neutral} 
          bad = {bad}
    />

    </div>
  )
}

export default App