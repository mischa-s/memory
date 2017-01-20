const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('../../src/reducer')

test('CLICKED_CARD | should check if the card matches the cardRevealed or reveal it if no card is revealed', t => {

  const state = {
    cards: {
      1: {
        id: 3,
        value: 'blue',
        visable: false
      },
      2: {
        id: 1,
        value: 'red',
        visable: false
      },
      3: {
        id: 4,
        value: 'blue',
        visable: false
      },
      4: {
        id: 2,
        value: 'red',
        visable: false
      }
    },
    cardRevealed: null,
    highScores: {}
  }
  freeze(state)

  const expectedState1 = {
    cards: {
      1: {
        id: 3,
        value: 'blue',
        visable: false
      },
      2: {
        id: 1,
        value: 'red',
        visable: false
      },
      3: {
        id: 4,
        value: 'blue',
        visable: true
      },
      4: {
        id: 2,
        value: 'red',
        visable: false
      }
    },
    cardRevealed: 3,
    highScores: {}
  }

  const action1 = {
    type: 'CLICKED_CARD',
    payload: 3
  }

  const newState1 = reducer(state, action1)

  t.deepEqual(expectedState1, newState1, 'should change cardRevealed to the clicked card if it was null')

  const expectedState2 = {
    cards: {
      1: {
        id: 3,
        value: 'blue',
        visable: false
      },
      2: {
        id: 1,
        value: 'red',
        visable: false
      },
      3: {
        id: 4,
        value: 'blue',
        visable: false
      },
      4: {
        id: 2,
        value: 'red',
        visable: false
      }
    },
    cardRevealed: null,
    highScores: {}
  }

  const action2 = {
    type: 'CLICKED_CARD',
    payload: 2
  }

  const newState2 = reducer(newState1, action2)

  t.deepEqual(expectedState2, newState2, 'should change revealed card back to null if no match')

  const expectedState3 = {
    cards: {
      1: {
        id: 3,
        value: 'blue',
        visable: true
      },
      2: {
        id: 1,
        value: 'red',
        visable: false
      },
      3: {
        id: 4,
        value: 'blue',
        visable: true
      },
      4: {
        id: 2,
        value: 'red',
        visable: false
      }
    },
    cardRevealed: null,
    highScores: {}
  }

  const action3 = {
    type: 'CLICKED_CARD',
    payload: 1
  }

  const newState3 = reducer(newState1, action3)

  t.deepEqual(expectedState3, newState3, 'should change cards to visable if a match')

  t.end()
})
