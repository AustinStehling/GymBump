export const RECEIVE_USER = 'RECEIVE_USER'
import * as APIUtil from '../../util/user/user_util'

export const receiveUser = payload => {
  return {
    type: RECEIVE_USER,
    payload
  };
};


export const requestUser = id => {
  APIUtil.fetchSingleUser(id).then(user => {
    dispatch(receiveUser(user));
    return user;
  });
};
