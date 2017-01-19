const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore } = require('redux')
const reducer = require('./reducer')
//Below is es6 object destructuring
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
         <SubmitName />,
         root
       )
     }
     store.dispatch({type: 'GO!'})

})
