import { combineReducers} from 'redux';
import { userReducer, UserState } from './user/user.reducer';
import { messagesReducer, MessagesState } from './chat/messages/mssages.reducer';
import { channelReducer, ChannelState } from './chat/channels/channels.reducer';

export interface State {
  userState: UserState;
  messagesState: MessagesState;
  channelState: ChannelState;
};

export const reducers = combineReducers<State>({
  userState: userReducer,
  messagesState: messagesReducer,
  channelState: channelReducer,
});
