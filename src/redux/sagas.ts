import { all, fork } from 'redux-saga/effects';

import { watchLoadChannelsRequestStart } from './chat/channels/channels.sagas';
import { watchSendMessageRequestStart } from './chat/messages/messages.sagas';

export const rootSaga = function* root() {
  yield all([
    fork(watchLoadChannelsRequestStart),
    fork(watchSendMessageRequestStart),
  ])
}
