import * as APIUtil from '../util/setresult/setresult_util';
import { CLEAR_ALL } from '../actions/reset_state';
import merge from 'lodash/merge';

const setResultReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case CLEAR_ALL:
      return {};
    case RECEIVE_WORKOUT:
      const setresult = action.setresult;
      newState = merge({}, state, { [setresult.id]: setresult, selectedSet: setresult.id })
      return newState;
    default:
      return state;
  }
}

export default setResultReducer;
