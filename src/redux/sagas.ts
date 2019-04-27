import { all, fork } from 'redux-saga/effects';

import { watchSendMessageRequestStart } from './chat/messages/messages.sagas';

export const rootSaga = function* root() {
  yield all([
    fork(watchSendMessageRequestStart),
  ])
}
