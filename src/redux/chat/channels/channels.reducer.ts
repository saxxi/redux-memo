import { createReducer } from "typesafe-actions";

import { Channel } from "./channels.types";
import { loadChannelsAsync, selectChannel } from "./channels.actions";

export type ChannelState = {
  loading: boolean
  channels: Channel[]
  selected?: Channel
  error?: string
}

export const initialState: ChannelState = {
  loading: false,
  channels: [],
  selected: undefined,
  error: undefined,
}

export const channelReducer = createReducer(initialState)
  .handleAction(loadChannelsAsync.request, (state) => handleLoadChannelsRequest(state))
  .handleAction(loadChannelsAsync.success, (state, action: any) => handleLoadChannelsSuccess(state, action.payload))
  .handleAction(loadChannelsAsync.failure, (state, action: any) => handleLoadChannelsFail(state, action.payload))
  .handleAction(selectChannel, (state, action: any) => handleSelectChannel(state, action.payload))

const handleLoadChannelsRequest = (state: ChannelState): ChannelState => ({
  ...state,
  loading: true,
  error: undefined,
})

const handleLoadChannelsSuccess = (state: ChannelState, channels: Channel[]): ChannelState => ({
  ...state,
  loading: false,
  channels: channels,
  error: undefined,
});

const handleLoadChannelsFail = (state: ChannelState, error: string): ChannelState => ({
  ...state,
  loading: false,
  error: error,
});

const handleSelectChannel = (state: ChannelState, selectedChannel: Channel): ChannelState => ({
  ...state,
  selected: selectedChannel,
})
