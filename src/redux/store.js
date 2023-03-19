import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import usersReducers from './reducers/users';

const preloadedState = {};

const rootReducers = combineReducers({
  users: usersReducers
});

const store = configureStore({
  devTools: true,
  reducer: rootReducers,
  middleware: [thunk],
  preloadedState
});

export default store;
