const React = require('react')
const ReactDOM = require('react-dom')
const _ = require('lodash')

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
  const highScores = _.map(props.state.highScores)
  const {store, state} = props
  const staticCardKeys = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
  ]
  return (
    <div>
      <h1>Game Of Cards</h1>
        <table>
          <tbody>
            {
                staticCardKeys.map((key) => {
                return <Cards keys={key} store={store} state={state} />
                })
            }
          </tbody>
        </table>
      <Score state={state} />

      <SubmitName store={store}/>
      <HighScore highScores={highScores} />
    </div>
  )
}
module.exports = App
