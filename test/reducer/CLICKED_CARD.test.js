const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('../../src/reducer')

test('', t => {

  const state = {
    cards: {},
    cardRevealed: null,
    highScores: {}
  }
  freeze(state)


  t.end()
})
