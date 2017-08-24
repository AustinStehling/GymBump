import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user/user_actions';
import merge from 'lodash/merge';



const usersReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState;

  switch(action.type) {
    case RECEIVE_ALL_USERS:
      newState = merge({}, state, action.users);
      return newState;
    case RECEIVE_USER:
      const member = merge({}, action.user);
      member.workouts = Object.keys(action.user.workouts)
      newState = merge({}, state, { selected: member } );
      return newState;
    default:
      return state;
  }
}


export default usersReducer;
