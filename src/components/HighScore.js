const _ = require('lodash')
const React = require('react')
const ReactDOM = require('react-dom')


const HighScore = (props) =>  {
  const highScores = props.highScores

  return (
    <div className='container-highscore'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
          {highScores.map(highScore => <tr><td>{highScore.Name}</td><td>{highScore.Score}</td></tr>)}
          </tbody>
        </table>
    </div>
  )
}



module.exports = HighScore



// <tr>
// {Object.keys(props.highScores).map(key) => {<td> props.highScores[key][Name]</td>}
// }
// </tr>
