const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore } = require('redux')
const reducer = require('./reducer')
const request = require('superagent')


//Components
const App = require('../src/components/App')
const store = createStore(reducer)

document.addEventListener('DOMContentLoaded', (e) => {

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

  })
})
