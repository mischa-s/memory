const React = require('react')
const ReactDOM = require('react-dom')
const Cards = require('Cards')
const SubmitName = require('SubmitName')
const Score = require('Score')
const HighScore = require('./HighScore')

//Below is es6 object destructuring
const {Route, Router, IndexRoute, hashHistory} = require('react-router')

//Load foundation

//App css

// App({state: state, store:store})

const App = (props) =>  {

  const highScores = props.state.highScores
  return (
    <div>
      <Score />
      <Cards />
      <SubmitName />
      <HighScore highScores={highScores} />
    </div>
  )
}
module.exports = App


function double(prop) {
  return 2*prop
}
