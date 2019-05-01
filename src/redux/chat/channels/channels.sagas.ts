import { call, put, takeEvery } from 'redux-saga/effects';
import { loadChannels } from '../../../services/chat/channels.service';
import { loadChannelsAsync, SEND_CHANNELS_REQUEST } from './channels.actions';

export function* requestLoadChannels(action: ReturnType<typeof loadChannelsAsync.request>) {
  const channels = yield call(loadChannels);
  try {
    yield put(loadChannelsAsync.success(channels));
  } catch (err) {
    yield put(loadChannelsAsync.failure(err));
  }
}

export function* watchLoadChannelsRequestStart() {
  yield takeEvery(SEND_CHANNELS_REQUEST, requestLoadChannels);
}
