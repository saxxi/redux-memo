```
function saveScore (score) {
  return dispatch => {
    dispatch({
      type: SAVE_SCORE,
      score
    })

    fetch('/scores', { method: 'POST', { score } })
      .then(dispatch => {
        dispatch({
          type: SAVE_SCORE_SUCCEEDED
        })
      })
  }
}

it('Save score posts the score to the server and dispatches a success action.', done => {
  const server = sinon.fakeServer.create()
  server.respondWith('POST', '/scores', [
    200,
    { Content-Type: 'application/json' },
    '{ "success": true }'
  ])

  const mockStore = createMockStore([ thunk ])
  const expectedActions = [
    { type: SAVE_SCORE, score: 9001 },
    { type: SAVE_SCORE_SUCCEEDED }
  ]
  const store = mockStore({}, expectedActions, done)

  store.dispatch(saveScore(9001))
  server.respond()
  server.restore()
})
```
