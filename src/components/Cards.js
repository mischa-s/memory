const React = require('react')
const ReactDOM = require('react-dom')
const _ = require('lodash')
const reducer = require ('reducer')

const Cards = (props) =>  {
  console.log(props.state.cards, "here are the props");

// var ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

  return (
    <tr className='cards-row'>
      {
        props.keys.map(key => {
          const colourToShow = props.state.cards[key].visable
            ? props.state.cards[key].value
            : 'white'

          return (
            <td
              className={`each-card ${colourToShow}`}
              style={{'background-color': colourToShow}}
              onClick={() => props.store.dispatch({type:'CLICKED_CARD', payload: key})}>
            </td>
          )
        })
      }
    </tr>
  )
}

module.exports = Cards
