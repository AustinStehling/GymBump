import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user/user_actions';
import { CLEAR_ALL } from '../actions/reset_state';
import { RECEIVE_WORKOUT, REMOVE_WORKOUT } from '../actions/workout/workout_actions';
import merge from 'lodash/merge';



const usersReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState;

  switch(action.type) {
    case CLEAR_ALL:
      return {};
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
    case REMOVE_WORKOUT:
      newState = merge({}, state);
      let idx = newState.selected.workouts.indexOf(action.workout.id);
      newState.selected.workouts.splice(idx, 1)
      return newState;
    default:
      return state;
  }
}

export default usersReducer;
