import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';
import { login } from './actions/session_actions';
import * as APIUtil from './util/user/user_util'
import { receiveAllUsers } from './actions/user/user_actions'

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.dispatch = store.dispatch;
  window.getState = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});

window.receiveAllUsers = receiveAllUsers;
window.fetchUsers = APIUtil.fetchUsers;
