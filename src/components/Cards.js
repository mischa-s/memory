const React = require('react')
const ReactDOM = require('react-dom')
const _ = require('lodash')
const reducer = require ('reducer')

const Cards = (props) =>  {

// var ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

  return (
    <tr className='cards-row'>
      {
        props.keys.map(key => {
          return (
            <td className='each-card' onClick={() => props.store.dispatch({type:'CLICKED_CARD', payload: key})}>{key}</td>
          )
        })
      }
    </tr>
  )
}

module.exports = Cards
