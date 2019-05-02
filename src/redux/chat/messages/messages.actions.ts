import { createAsyncAction } from 'typesafe-actions';
import { Message, StartMessage } from './messages.types';

export const SEND_MESSAGE_REQUEST = '@/chat/messages/SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_SUCCESS = '@/chat/messages/SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = '@/chat/messages/SEND_MESSAGE_FAILURE';

export const sendMessageAsync = createAsyncAction(
  SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE
)<StartMessage, Message, string>();
