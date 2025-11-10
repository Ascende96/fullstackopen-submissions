import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avg, setAvg] = useState(0)
  const [perc, setPerc] = useState(0)

  const handleGood = () =>{
    const updGood = good+1
    const total = updGood + neutral + bad
    setGood(updGood)
    setAvg((updGood-bad)/total)
    setPerc(100*updGood/total)
  } 
  const handleNeutral = () => {
    const updNeutral= neutral+1
    const total = good + updNeutral + bad
    setNeutral(updNeutral)
    setAvg((good-bad)/total)
    setPerc(100*good/total)

  }
  const handleBad = () => {
    const updBad = bad+1
    const total = good + neutral + updBad
    setBad(updBad)
    setAvg((good-updBad)/total)
    setPerc(100*good/total)

  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text="neutral"/>
      <Button onClick={handleBad} text="bad"/>
      <h1>statistics</h1>
      <p>good {good}</p> 
      <p>neutral {neutral}</p> 
      <p>bad {bad}</p> 
      <p>average {avg}</p>
      <p>positive {perc}%</p>
    </div>
  )
}

export default App