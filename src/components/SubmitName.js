const React = require('react')



  let SubmitName = (props) =>  {
    return (
      <div>
        <form>
          <input type='text' ref='SubmitText' placeholder='Write Your Name Here' />
          <button className='button'>Add Score</button>
        </form>
      </div>
    )
  }


module.exports = SubmitName
