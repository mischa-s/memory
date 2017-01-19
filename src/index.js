const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore } = require('redux')
const reducer = require('./reducer')
const request = require('superagent')

// components
const App = require('./components/app')
const CounterApp = require('./components/counter-app')



// actions
// plain object {type: string, payload: Object | string | number}

// model -> state

// reducer (state, action) :: -> state
const initialState = {
  total: 0
}


const store = createStore(reducer, initialState)

document.addEventListener('DOMContentLoaded', (e) => {

  store.subscribe(() => {
    const state = store.getState()
    console.log('state', state)
    render(state)
  })


  function render (state) {
    const root = document.querySelector('#app')
    ReactDOM.render(
      <App state={state} store={store} />,
      root
    )
  }

  request('/api/v1/highscores', (err, res) => {
  store.dispatch({type: 'UPDATE_HIGHSCORES', payload: res.body})

  })

  store.dispatch({type: 'get going!'})


})
