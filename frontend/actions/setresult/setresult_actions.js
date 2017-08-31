import * as APIUtil from '../../util/setresult/setresult_util'

export const CREATE_SETRESULT = 'CREATE_SETRESULT'
export const RECEIVE_SETRESULT = 'RECEIVE_SETRESULT'
export const CLEAR_SETRESULT = 'CLEAR_SETRESULT'

export const createSetResult = setresult => {
  return {
    type: CREATE_SETRESULT,
    setresult
  };
};

export const receiveSetResult = setresult => {
  return {
    type: RECEIVE_SETRESULT,
    setresult
  };
};

export const createSet = setresult => dispatch => {
  return APIUtil.createResults(setresult).then(setresult => {
    return dispatch(receiveSetResult(setresult));
  });
};

export const requestSetResult = id => dispatch => {
  return APIUtil.fetchSetResult(id).then(setresult => {
    return dispatch(receiveSetResult(setresult));
  });
};

export const editResult = id => dispatch => {
  return APIUtil.editSetResult(id).then(setresult => {
    return dispatch(receiveSetResult(setresult));
  });
};
