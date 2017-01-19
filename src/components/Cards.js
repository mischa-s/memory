const React = require('react')
const ReactDOM = require('react-dom')

const Cards = (props) =>  {
// var ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  return (
    <div className='container-cards'>
      <table>
        <tbody>
          <tr className='cards-row'>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


module.exports = Cards
