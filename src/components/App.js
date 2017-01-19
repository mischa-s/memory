const React = require('react')
const ReactDOM = require('react-dom')
const Cards = require('Cards')
const SubmitName = require('SubmitName')
const Score = require('Score')
const HighScore = require('HighScore')

//Below is es6 object destructuring
const {Route, Router, IndexRoute, hashHistory} = require('react-router')

//Load foundation

//App css

const App = (props) =>  {
  return (
    <div>
      <Score />
      <Cards />
      <SubmitName />
      <HighScore />
    </div>
  )
}
module.exports = App
