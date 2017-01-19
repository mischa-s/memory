const clone = require('clone')
const _ = require('lodash')

module.exports = function (state, action) {
  const newState = clone(state)

  switch (action.type) {
    case 'RANDOMISE_CARDS':
      return newState

    case 'UPDATE_HIGHSCORES':
      console.log("action payload", action.payload);

    default:
      return newState
  }

}
