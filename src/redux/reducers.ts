import { combineReducers} from 'redux';
import { messagesReducer, MessagesState } from './chat/messages/mssages.reducer';
import { channelReducer, ChannelState } from './chat/channels/channels.reducer';

export interface State {
  messagesState: MessagesState;
  channelState: ChannelState;
};

export const reducers = combineReducers<State>({
  messagesState: messagesReducer,
  channelState: channelReducer,
});
