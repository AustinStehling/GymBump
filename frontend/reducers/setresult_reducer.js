import * as APIUtil from '../util/setresult/setresult_util';
import { RECEIVE_USER } from '../actions/user/user_actions';

import merge from 'lodash/merge';
const setResultReducer = (state, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.user.workouts)
    default:
      return state;
  }
}

export default setResultReducer;
