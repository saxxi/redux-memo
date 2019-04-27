import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css'

import store from '../store';
import { ChatAppComponent } from './chat/ChatApp.component';

export const App: React.FC = () => (
  <Provider store={store}>
    <ChatAppComponent />
  </Provider>
)
