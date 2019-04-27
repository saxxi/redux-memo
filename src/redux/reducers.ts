import { combineReducers} from 'redux';
import { messagesReducer, MessagesState } from './chat/messages/mssages.reducer';

export interface State {
  messagesState: MessagesState;
};

export const reducers = combineReducers<State>({
  messagesState: messagesReducer,
});
