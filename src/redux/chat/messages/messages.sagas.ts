import { call, put, takeEvery } from 'redux-saga/effects';
import { sendMessage } from '../../../services/chat/messages.service';
import { sendMessageAsync, SEND_MESSAGE_REQUEST } from './messages.actions';

function* requestSendMessage(action: ReturnType<typeof sendMessageAsync.request>) {
  const message = yield call(sendMessage, action.payload);
  try {
    yield put(sendMessageAsync.success(message));
  } catch (err) {
    yield put(sendMessageAsync.failure(err));
  }
}

export function* watchSendMessageRequestStart() {
  yield takeEvery(SEND_MESSAGE_REQUEST, requestSendMessage);
}
