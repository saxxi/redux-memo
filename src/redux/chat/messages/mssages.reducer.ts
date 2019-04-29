import { createReducer } from "typesafe-actions";

import { Message } from "./messages.types";
import { sendMessageAsync } from "./messages.actions";

export type MessagesState = {
  loading: boolean
  messages: Message[]
  error?: string
}

export const initialState: MessagesState = {
  loading: false,
  messages: [],
  error: null,
}

export const messagesReducer = createReducer(initialState)
  .handleAction(sendMessageAsync.request, (state, action: any) => handleSendMessageRequest(state))
  .handleAction(sendMessageAsync.success, (state, action: any) => handleSendMessageSuccess(state, action.payload))
  .handleAction(sendMessageAsync.failure, (state, action: any) => handleSendMessageFail(state, action.payload))

const handleSendMessageRequest = (state: MessagesState): MessagesState => ({
  ...state,
  loading: true,
  error: null,
})

const handleSendMessageSuccess = (state: MessagesState, message: Message): MessagesState => ({
  ...state,
  loading: false,
  messages: [...state.messages, message],
  error: null,
});

const handleSendMessageFail = (state: MessagesState, error: string): MessagesState => ({
  ...state,
  loading: false,
  error: error,
});
