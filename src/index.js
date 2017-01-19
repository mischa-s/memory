const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore } = require('redux')
const reducer = require('./reducer')
const request = require('superagent')
const {Route, Router, IndexRoute, hashHistory} = require('react-router')

//Components
const SubmitName = require('../src/components/SubmitName')
const store = createStore(reducer)

document.addEventListener('DOMContentLoaded', (e) => {

  store.subscribe(() => {
     const state = store.getState()
     render(state)
   })

  function render (state) {
    const root = document.querySelector('#app')
    ReactDOM.render(
      <SubmitName/>,
      root
    )
  }

  request('/api/v1/highscores', (err, res) => {
  store.dispatch({type: 'UPDATE_HIGHSCORES', payload: res.body})

  })

  store.dispatch({type: 'GO!'})

})
