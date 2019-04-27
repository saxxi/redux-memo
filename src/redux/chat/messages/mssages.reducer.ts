import { BaseAction } from '../../base-types';
import { actionIds, Message } from "./messages.types";

export type MessagesState = Message[];

export const messagesReducer = (state: MessagesState = [], action: BaseAction) => {
  switch (action.type) {
    case actionIds.ADD_MESSAGE:
      return handleAddMessage(state, action.payload);
  }
  return state;
}

const handleAddMessage = (state: MessagesState, message: Message): MessagesState => (
  [...state, message]
);
