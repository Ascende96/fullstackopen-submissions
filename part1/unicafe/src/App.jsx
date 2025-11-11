import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) =>(
  <p>{props.text} {props.value}</p>
)

const Statistics = (props) => {
  if(props.good==0 & props.bad==0 & props.neutral==0){
    return(
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  else{
    return(
      <>
        <h1>statistics</h1>
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="neutral" value={props.neutral}/>
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="average" value={props.avg}/>
        <StatisticLine text="percentage" value={props.perc}/>
      </>
    )
  }
}
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
    setPerc(100*updGood/total+'%')
  } 
  const handleNeutral = () => {
    const updNeutral= neutral+1
    const total = good + updNeutral + bad
    setNeutral(updNeutral)
    setAvg((good-bad)/total)
    setPerc(100*good/total+'%')

  }
  const handleBad = () => {
    const updBad = bad+1
    const total = good + neutral + updBad
    setBad(updBad)
    setAvg((good-updBad)/total)
    setPerc(100*good/total+'%')

  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text="neutral"/>
      <Button onClick={handleBad} text="bad"/>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        avg={avg}
        perc={perc}
      />
    </div>
  )
}

export default App