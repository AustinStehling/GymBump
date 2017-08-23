import { RECEIVE_ALL_USERS } from '../actions/user/user_actions';
import merge from 'lodash/merge';



const userReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState;

  switch(action.type) {
    case RECEIVE_ALL_USERS:
      newState = merge({}, state, action.users);
      return newState;
    default:
      return state;
  }
}


export default userReducer;
