const React = require('react')
const request = require ('superagent')

const SubmitName = React.createClass ({
  handleSubmit: function (e) {
    e.preventDefault()

    const submitText = this.refs.submitText.value
    const score = this.refs.score.value

    if (submitText.length > 0) {
      request.post('api/v1/highscores')
        .send({Name:submitText, Score:score})
        .end((err, data) => {
          console.log('heard back from api', data, err)
          this.props.store.dispatch({type: 'UPDATE_HIGHSCORES', payload: data.body.highScores})
        })

      this.refs.submitText.value = ''
      this.refs.score.value = ''
    } else {
      this.refs.submitText.focus()
    }
  },
  render: function () {
    console.log("state from submit name", );
    return (

      <div className="container-name">
        <form onSubmit={this.handleSubmit}>
          <input type='number' ref='score' value ={this.props.state.turnCount}/>
          <input type='text' ref='submitText' placeholder='Write your name here' />

          <button className='button expanded hollow'>Add Score</button>
        </form>
      </div>
    )
  }
})

module.exports = SubmitName
