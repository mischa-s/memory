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
    secondCardRevealed: null,
    highScores: {},
    gameComplete: false,
    turnCount: 0
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
    secondCardRevealed: null,
    highScores: {},
    gameComplete: false,
    turnCount: 0
  }

  const action1 = {
    type: 'CLICKED_CARD',
    payload: 3
  }

  const newState1 = reducer(state, action1)

  t.deepEqual(expectedState1, newState1, 'should change cardRevealed to the clicked card if it was null')

  const newState5 = reducer(newState1, action1)

  t.deepEqual(expectedState1, newState5, 'clicking the same card tiwce should not change the game')

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
        visable: true
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
    secondCardRevealed: 2,
    highScores: {},
    gameComplete: false,
    turnCount: 1
  }

  const action2 = {
    type: 'CLICKED_CARD',
    payload: 2
  }

  const newState2 = reducer(newState1, action2)

  t.deepEqual(expectedState2, newState2, 'should set second revealed card if no match')

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
    secondCardRevealed: null,
    highScores: {},
    gameComplete: false,
    turnCount: 1
  }

  const action3 = {
    type: 'CLICKED_CARD',
    payload: 1
  }

  const newState3 = reducer(newState1, action3)

  t.deepEqual(expectedState3, newState3, 'should change cards to visable if a match')

const expectedState4 = {
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
    secondCardRevealed: null,
    highScores: {},
    gameComplete: false,
    turnCount: 2
  }

  const newState4 = reducer(expectedState2, action1)

  t.deepEqual(expectedState4, newState4, 'should reset the state on clicking anywhere')

  t.end()
})

test('CLICKED_CARD | will change gameComplete to turn when all of the cards have been matched', t => {

  const state = {
    cards: {
      1: {
        id: 3,
        value: 'blue',
        visable: true
      },
      2: {
        id: 1,
        value: 'red',
        visable: true
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
    cardRevealed: 2,
    secondCardRevealed: null,
    highScores: {},
    gameComplete: false,
    turnCount: 17
  }
  freeze(state)

  const action = {
    type: 'CLICKED_CARD',
    payload: 4
  }

  const expectedState = {
    cards: {
      1: {
        id: 3,
        value: 'blue',
        visable: true
      },
      2: {
        id: 1,
        value: 'red',
        visable: true
      },
      3: {
        id: 4,
        value: 'blue',
        visable: true
      },
      4: {
        id: 2,
        value: 'red',
        visable: true
      }
    },
    cardRevealed: null,
    secondCardRevealed: null,
    highScores: {},
    gameComplete: true,
    turnCount: 18
  }

  const newState = reducer(state, action)

  t.deepEqual(expectedState, newState, 'should declare game complete when all cards are shown')

  t.end()
})
