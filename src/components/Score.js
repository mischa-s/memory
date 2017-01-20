const React = require('react')
const ReactDOM = require('react-dom')


const Score = (props) =>  {
  return (
    <div className='container-score'>
        <table>
          <tbody>
            <tr>
              <td>Your Score is: {props.state.turnCount}</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}


module.exports = Score
