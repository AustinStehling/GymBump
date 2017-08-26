import * as APIUtil from '../util/setresult/setresult_util';

import merge from 'lodash/merge';
const setResultReducer = (state, action) => {
  Object.freeze(state);

  switch(action.type) {
    default:
      return state;
  }
}

export default setResultReducer;
