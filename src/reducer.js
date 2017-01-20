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

      if(newState.cardRevealed === action.payload && !newState.secondCardRevealed){
        return newState
      }


      if(!newState.cardRevealed){
        newState.cardRevealed = action.payload
        clickedCard.visable = true

        return newState
      }

      newState.turnCount++

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
        const cardKeys = Object.keys(newState.cards)
        const cardsUnmatched = cardKeys.filter(cardKey => {
          return !newState.cards[cardKey].visable
        })
        if(!cardsUnmatched.length){
          newState.gameComplete = true
        }

      }else{
        newState.secondCardRevealed = action.payload
      }

      return newState

    default:
      return newState

  }
}
