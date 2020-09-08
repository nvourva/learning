import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
	<button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
	if ( 0 === props.all ) {
		return (
			<p>Please provide some feedback.</p>
		)
	}
	return(
		<table>
			<tbody>
				<Statistic text="Good" value ={props.good} />
				<Statistic text="Neutral" value ={props.neutral} />
				<Statistic text="Bad" value ={props.bad} />
				<Statistic text="All" value ={props.all} />
				<Statistic text="Average" value ={((props.good - props.bad  ) / props.all).toFixed(2)} />
				<Statistic text="Positive" value ={((props.good / props.all) * 100).toFixed(2) + '%'} />
			</tbody>
    </table>
	)
}

const Statistic = (props) => (
		<tr>
			<td>{props.text}: </td><td>{props.value}</td>
		</tr>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [allFeedback, setAllFeedback] = useState(0)
	const [average, setAverage] = useState(0)
	const [positive, setPositive] = useState(0)

	const addFeedback = value => {
		setAllFeedback(allFeedback + 1)

		if ( 0 === value ) {
			setNeutral(neutral + 1)
		} else if ( 1 === value ) {
			setGood(good +1)
		} else if ( -1 === value ) {
			setBad(bad + 1)
		}
	}

	const getAverage = 

  return (
    <div>
			<h2>Give Feedback</h2>
			<Button handleClick={() => addFeedback(1)} text="Good" />
			<Button handleClick={() => addFeedback(0)} text="Neutral" />
			<Button handleClick={() => addFeedback(-1)} text="Bad" />
			<h2>Statistics</h2>
     	<Statistics good={good} neutral={neutral} bad={bad} all={allFeedback} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)