import { createAction } from '@reduxjs/toolkit';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

const register = createAction('auth/signUp', user => ({
    payload: {
      name: user.name,
      email: user.email,
      password: user.password,
  }
}));

const logIn = createAction('auth/logIn');

const logOut = createAction('auth/logIn');

const fetchCurrentUser = createAction('auth/refresh')

const authActions = { register, logIn, logOut, fetchCurrentUser };

export default authActions;