const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('../../src/reducer')

test('UPDATE_HIGHSCORES | adds an array of highscores in order of score', t => {

  const state = {
    cards: {},
    cardRevealed: null,
    highScores: {}
  }
  freeze(state)

  const expectedState = {
    cards: {},
    cardRevealed: null,
    highScores: {
      1: {
        id: 4,
        Name: 'Donatello',
        Score: 11
      },
      2: {
        id: 1,
        Name: 'Leonardo',
        Score: 36
      },
      3: {
        id: 3,
        Name: 'Michael Angelo',
        Score: 42
      },
      4: {
        id: 2,
        Name: 'Raphael',
        Score: 124
      }
    }
  }

  const action = {
    type: 'UPDATE_HIGHSCORES',
    payload: [
      {
        id: 1,
        Name: 'Leonardo',
        Score: 36
      },
      {
        id: 2,
        Name: 'Raphael',
        Score: 124
      },
      {
        id: 3,
        Name: 'Michael Angelo',
        Score: 42
      },
      {
        id: 4,
        Name: 'Donatello',
        Score: 11
      }
    ]
  }

  const newState = reducer(state, action)

  t.deepEqual(newState, expectedState, 'should order highscores entries by score (lowest first) and add them into the highScores object in state')

  t.end()
})
