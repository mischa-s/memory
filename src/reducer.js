const clone = require('clone')
const _ = require('lodash')

module.exports = function (state, action) {
  const newState = clone(state)

  switch (action.type) {

    case 'RANDOMISE_CARDS':
      const oneSetCardValues = ['Red', 'Blue', 'Yellow', 'Green', 'Orange', 'Purple', 'Black', 'White']
      const cardValues = []
      oneSetCardValues.forEach(cardValue => {
        cardValues.push(cardValue)
        cardValues.push(cardValue)
      })
      for (var i = 1; i < 17; i++) {
        const randomCardPosition = Math.floor(Math.random() * cardValues.length)
        const card = {
          id: i,
          value: cardValues.splice(randomCardPosition, 1)[0],
          visable: false
        }
        newState.cards[i] = (card)
      }
      return newState

    case 'UPDATE_HIGHSCORES':
        console.log('action', action.payload)
        const sortedHighscores = action.payload.sort(function(a, b){
        return a.Score - b.Score
      })
      for (var i = 0; i < sortedHighscores.length; i++) {
        newState.highScores[i + 1] = sortedHighscores[i]
      }
      return newState

      // console.log("action payload", action.payload);
      default:
        return state


  }

}
