const _ = require('lodash')
const React = require('react')
const ReactDOM = require('react-dom')


const HighScore = (props) =>  {
  console.log('array of keys', _.map(props.highScores, value => value));
  console.log('props', props);

  return (
    <div className='container-highscore'>
        <table>
          <thead>
            <tr>
              <th>Score</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>  name
            </td>
            <td>
            score
            </td>
          </tr>
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
