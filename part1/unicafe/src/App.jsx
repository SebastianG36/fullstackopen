import { useState } from 'react'

//Button reusable component
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

//Title reusable component
const Title = (props) => <h1>{props.title}</h1>

//StatisticLine component for using on a table component
const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

//StatisticTable gathers all statisticLine components added within an HTML table 
//If no feedback has been given, returns paragraph remarking it
const StatisticTable = ({good, neutral, bad}) => {
  if (good + bad + neutral === 0) {
    return <p>No feedback given</p>
  }
  return (
  <table>
        <StatisticLine text='Good' value={good} /> 
        <StatisticLine text='Neutral' value={neutral} />
        <StatisticLine text='Bad' value={bad} />
        <StatisticLine text='All' value={(good + neutral + bad)} />
        <StatisticLine text='Average' value={((good - bad) / (good + neutral + bad)).toFixed(2)} />
        <StatisticLine text='Positive' value={Math.round(good / (good + neutral + bad) * 100) + ' %'} />
  </table>)
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => () => {
    console.log('value now', newValue)
    setGood(newValue)
  }

  const setToNeutral = newValue => () => {
    console.log('value now', newValue)
    setNeutral(newValue)
  }

  const setToBad = newValue => () => {
    console.log('value now', newValue)
    setBad(newValue)
  }

  return (
    <div>
      <Title title='Give Feedback' />
      <Button handleClick={setToGood(good + 1)} text="Good" />
      <Button handleClick={setToNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={setToBad(bad + 1)} text="Bad" />
      <Title title='Statistics' />
      <StatisticTable good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App