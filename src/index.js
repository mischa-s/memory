const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore } = require('redux')
const reducer = require('./reducer')
const request = require('superagent')


const state = {
  cards: {},
  cardRevealed: null,
  highScores: {}
}


//Components
const App = require('../src/components/App')
const store = createStore(reducer, state)


document.addEventListener('DOMContentLoaded', (e) => {

store.dispatch({type: 'RANDOMISE_CARDS'})
console.log(store.getState(), 'here is the state');
  store.subscribe(() => {
     const state = store.getState()
     render(state)
   })

  function render (state) {
    console.log(state);
    const root = document.querySelector('#app')
    ReactDOM.render(
      <App state={state} store={store}/>,
      root
    )
  }

  request('/api/v1/highscores', (err, res) => {
    store.dispatch({type: 'UPDATE_HIGHSCORES', payload: res.body})

  })
  render(store.getState())
})
