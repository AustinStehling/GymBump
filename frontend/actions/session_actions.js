export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
import * as APIUtil from '../util/session_api_util.js'

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = user => {
  return APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)));
}

export const logout = () => (dispatch) => {
  return APIUtil.logout().then(() => dispatch(receiveCurrentUser(null)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)));
};
