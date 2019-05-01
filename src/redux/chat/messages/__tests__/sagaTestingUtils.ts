// Untested
import {runSaga, Saga} from 'redux-saga';
import { Action } from 'typesafe-actions';

export async function recordSaga(saga: Saga, initialAction: Action) {
  const dispatched: Action[] = [];

  await runSaga(
    {
      dispatch: (action: Action) => dispatched.push(action)
    },
    saga,
    initialAction
  ).done;

  return dispatched;
}
