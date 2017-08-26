import * as APIUtil from '../../util/setresult/setresult_util'

export const CREATE_SETRESULT = 'CREATE_SETRESULT'

export const createSetResult = setresult => {
  return {
    type: CREATE_SETRESULT,
    setresult
  };
};

export const createSet = (setresult) => dispatch => {
  APIUtil.createResults(setresults);
}
