const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore } = require('redux')
const reducer = require('./reducer')
const request = require('superagent')


const state = {
  cards: {},
  cardRevealed: null,
  highScores: {},
  secondCardRevealed: null
}


//Components

const App = require('App')
const store = createStore(reducer, state)


const initialState = {
  cards: {},
  cardRevealed: null,
  highScores: {
    1: {
      id: 4,
      Name: 'Donny',
      Score: 12
    },
    2: {
      id: 1,
      Name: 'Leo',
      Score: 56
    },
    3: {
      id: 3,
      Name: 'Mike',
      Score: 142
    },
    4: {
      id: 2,
      Name: 'Raphyl',
      Score: 24
    }
  }
}

document.addEventListener('DOMContentLoaded', (e) => {

store.dispatch({type: 'RANDOMISE_CARDS'})
  store.subscribe(() => {
    const state = store.getState()
    render(state)
  })

  function render (state) {
    const root = document.querySelector('#app')
    ReactDOM.render(
      <App state={state} store={store}/>,
      root
    )
  }

  request('/api/v1/highscores', (err, res) => {
    store.dispatch({type: 'UPDATE_HIGHSCORES', payload: res.body})
    console.log(res);

  })
  render(store.getState())
})
