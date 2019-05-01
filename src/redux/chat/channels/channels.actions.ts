import { createAsyncAction, createAction } from 'typesafe-actions';
import { Channel } from './channels.types';

export const SEND_CHANNELS_REQUEST = '@/chat/channels/SEND_CHANNELS_REQUEST';
export const SEND_CHANNELS_SUCCESS = '@/chat/channels/SEND_CHANNELS_SUCCESS';
export const SEND_CHANNELS_FAILURE = '@/chat/channels/SEND_CHANNELS_FAILURE';
export const SELECT_CHANNEL = '@/chat/channels/SELECT_CHANNEL';

export const loadChannelsAsync = createAsyncAction(
  SEND_CHANNELS_REQUEST, SEND_CHANNELS_SUCCESS, SEND_CHANNELS_FAILURE
)<undefined, Channel, string>();

export const selectChannel = createAction(SELECT_CHANNEL, resolve => {
  return (channel: Channel) => resolve(channel);
})
