import { createReducer } from "typesafe-actions";

import { Message } from "./messages.types";
import { sendMessageAsync } from "./messages.actions";

export type MessagesState = {
  loading: boolean
  messages: { [id: string]: Message[] }
  error?: string
}

export const initialState: MessagesState = {
  loading: false,
  messages: {},
  error: undefined,
}

export const messagesReducer = createReducer(initialState)
  .handleAction(sendMessageAsync.request, (state, action: any) => handleSendMessageRequest(state))
  .handleAction(sendMessageAsync.success, (state, action: any) => handleSendMessageSuccess(state, action.payload))
  .handleAction(sendMessageAsync.failure, (state, action: any) => handleSendMessageFail(state, action.payload))

const handleSendMessageRequest = (state: MessagesState): MessagesState => ({
  ...state,
  loading: true,
  error: undefined,
})

const handleSendMessageSuccess = (state: MessagesState, message: Message): MessagesState => {
  return {
    ...state,
    loading: false,
    messages: {
      ...state.messages,
      [message.to.id]: [...state.messages[message.to.id] || [], message]
    },
    error: undefined,
  }
};

const handleSendMessageFail = (state: MessagesState, error: string): MessagesState => ({
  ...state,
  loading: false,
  error: error,
});
