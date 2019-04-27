import { BaseAction } from '../../base-types';
import { actionIds, Message } from './messages.types';

export const sendMessageStartAction = (msg: string): BaseAction => ({
  type: actionIds.SEND_MESSAGE,
  payload: msg,
});

export const sendMessageCompletedAction = (message: Message): BaseAction => ({
  type: actionIds.ADD_MESSAGE,
  payload: message,
});
