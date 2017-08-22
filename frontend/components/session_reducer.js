import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions'

const currentUser = { currentUser: null, errors: [] }

const sessionReducer = (state = currentUser, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState = merge({}, state);
      newState.currentUser = null;
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
}

export default sessionReducer;
