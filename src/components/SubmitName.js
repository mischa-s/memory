const React = require('react')


const SubmitName = React.createClass ({
  handleSubmit: function (e) {
    e.preventDefault()

    const submitText = this.refs.submitText.value

    if (submitText.length > 0) {
      this.refs.submitText.value = ''
    } else {
      this.refs.submitText.focus()
    }
  },
  render: function () {
    return (
      <div className="container-name">
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='submitText' placeholder='Write your name here' />
          <button className='button expanded hollow'>Add Score</button>
        </form>
      </div>
    )
  }
})

module.exports = SubmitName
