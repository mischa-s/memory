const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('../../src/reducer')

test('RANDOMISE_CARDS | adds two sets of the cards, randomly ordered, into the state', t => {

  const state = {
    cards: {},
    cardRevealed: null,
    highScores: {}
  }
  freeze(state)

  const action = {
    type: 'RANDOMISE_CARDS'
  }

  const newState = reducer(state, action)

  const cardKeys = Object.keys(newState.cards)
  function cardHasValue4(key){
    return newState.cards[key].value === 4
  }
  const expectedKeysOfCard = ['id', 'value', 'visable']

  t.is(cardKeys.length, 16, 'there should be exactly 16 cards')
  t.is(cardKeys.filter(cardHasValue4).length, 2, 'there should be 2 cards with id 4')
  t.deepEqual(Object.keys(newState.cards[7]), expectedKeysOfCard, 'the cards should have the appriate keys')

  t.end()
})
