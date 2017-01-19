const React = require('react')
const ReactDOM = require('react-dom')


const HighScore = (props) =>  {
  return (
    <div className='container-highscore'>
        <table>
          <tbody>
            <tr>
              <td>Name: Score:</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}


module.exports = HighScore
