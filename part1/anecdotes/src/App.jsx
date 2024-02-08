import { useState } from 'react'

//Title reusable component
const Title = ({text}) => (
  <h1>{text}</h1>
)

//Button reusable component
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

//Text reusable component
const Text = ({text}) => <p>{text}</p>


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const votesArrs = new Uint8Array(8) //Defines a zeros array

  const [voteState, setVote] = useState(votesArrs)

  //randomNext ensures the random number is different than the selected anecdotes number 
  const randomNext = () => { 
    let random = (Math.round(Math.random() * (anecdotes.length - 1)))
    if (random != selected) {
      console.log(random)
      return random
    } 
    return randomNext()
  }


  const handleToNext = () => {
    let random = (randomNext())
    console.log('previous value', selected)
    console.log('value now', random)
    setSelected(random)
  }

  //Map function checks if the index is the same as the selected anecdote index, if it is it adds a vote
  const handleToVote = () => {
    console.log('Old vote array', voteState)
    console.log('New vote Array', voteState)
    setVote(voteState.map((x, i) => {
      if (i === selected) {
        return x + 1
      }
      return x
    }))

  }


 
  return (
    <div>
      <Title text='Anecdote Machine' />
      <Text text={anecdotes[selected]} />
      <Text text={'Has ' + voteState[selected] + ' votes'} />
      <Button handleClick={handleToNext} text='Next anecdote' />
      <Button handleClick={handleToVote} text='Vote' />
      <Title text='Anecdote with most votes' />
      <Text text={anecdotes[voteState.indexOf(Math.max(...voteState))]} />
      <Text text={'Has ' + Math.max(...voteState) + ' votes'} />
    </div>
  )
}

export default App