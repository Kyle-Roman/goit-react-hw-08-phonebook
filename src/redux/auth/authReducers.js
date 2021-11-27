import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authActions from './authActions';
// import {authApi} from '../../Components/api/authApi';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const user = createReducer(initialState, {
  [authActions.register]: (state, {payload}) => {
     return [state.user = payload.user,
      state.token = payload.token,
      state.isLoggedIn = true] 
    },
    [authActions.logIn]: (state, {payload}) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authActions.logOut]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authActions.fetchCurrentUser]: (state, {payload}) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
});

export default combineReducers({
  user,
});