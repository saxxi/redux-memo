import { call, put, takeEvery } from 'redux-saga/effects';
import { sendMessage } from '../../../services/chat/messages.service';
import { sendMessageCompletedAction } from './messages.actions';
import { actionIds } from './messages.types';
import { BaseAction } from '../../base-types';

function* requestSendMessage(action: BaseAction) {
  const message = yield call(sendMessage, action.payload);
  yield put(sendMessageCompletedAction(message));
}

export function* watchSendMessageRequestStart() {
  yield takeEvery(actionIds.SEND_MESSAGE, requestSendMessage);
}
