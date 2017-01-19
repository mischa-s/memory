const React = require('react')
const ReactDOM = require('react-dom')


const Cards = (props) =>  {
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
      <table>
        <tbody>
          <tr className='cards-row'>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr className='cards-row'>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr className='cards-row'>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


module.exports = Cards
