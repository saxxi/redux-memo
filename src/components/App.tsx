import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css'

import store from '../store';
import { ChatAppContainer } from './chat/ChatApp.container';

export const App: React.FC = () => (
  <Provider store={store}>
    <ChatAppContainer />
  </Provider>
)
