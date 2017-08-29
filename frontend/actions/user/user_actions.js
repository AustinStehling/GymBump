export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
import * as APIUtil from '../../util/user/user_util';


export const receiveAllUsers = users => {
  return {
   type: RECEIVE_ALL_USERS,
   users
  };
};

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const editUser = (id, formData) => dispatch => {
  return APIUtil.updateUser(id, formData).then(user => dispatch(receiveUser(user)));
}

export const requestAllUsers = () => dispatch => {
  return APIUtil.fetchUsers().then(users => dispatch(receiveAllUsers(users)));
}

export const requestUser = id => dispatch => {
  APIUtil.fetchSingleUser(id).then(user => {
    return dispatch(receiveUser(user));
  });
};
