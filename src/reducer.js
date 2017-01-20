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
        const sortedHighscores = action.payload.sort(function(a, b){
        return a.Score - b.Score
      })
      for (var i = 0; i < sortedHighscores.length; i++) {
        newState.highScores[i + 1] = sortedHighscores[i]
      }
      return newState

    case 'CLICKED_CARD':

      const revealedCard = newState.cards[newState.cardRevealed]
      const clickedCard = newState.cards[action.payload]
      const secondRevealedCard = newState.cards[newState.secondCardRevealed]

      if(!newState.cardRevealed){
        newState.cardRevealed = action.payload
        clickedCard.visable = true

        return newState
      }

      if(newState.secondCardRevealed){
        revealedCard.visable = false
        secondRevealedCard.visable = false
        newState.cardRevealed = null
        newState.secondCardRevealed = null
        return newState
      }
      clickedCard.visable = true

      if(revealedCard.value === clickedCard.value){ //
        revealedCard.visable = true
        newState.cardRevealed = null

      }else{
        newState.secondCardRevealed = action.payload
      }

      return newState

    default:
      return state
  }

}
