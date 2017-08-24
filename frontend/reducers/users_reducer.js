import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user/user_actions';
import { RECEIVE_WORKOUT } from '../actions/workout/workout_actions';
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
      if (!member.workouts) {
        member.workouts = [];
      } else {
        member.workouts = Object.keys(action.user.workouts);
      }
      newState = merge({}, state, { selected: member } );
      return newState;
    case RECEIVE_WORKOUT:
      newState = merge({}, state);
      newState.selected.workouts.push(action.workout.id)
      return newState;
    default:
      return state;
  }
}

export default usersReducer;
