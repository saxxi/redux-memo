import { createReducer } from 'typesafe-actions';

import { User } from './user.types';

export type UserState = {
  user: User
}

export const initialState: UserState = {
  user: {
    id: 'me-123-123',
    fullname: 'Me is here',
  },
}

export const userReducer = createReducer(initialState)
