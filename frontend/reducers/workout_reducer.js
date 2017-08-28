import { RECEIVE_WORKOUT } from '../actions/workout/workout_actions';
import { RECEIVE_USER } from '../actions/user/user_actions';
import { CLEAR_ALL } from '../actions/reset_state';
import merge from 'lodash/merge';

const workoutReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState;

  switch(action.type) {
    case CLEAR_ALL:
      return {};
    case RECEIVE_USER:
      let workouts = action.user.workouts
      return merge({}, state, workouts)
    case RECEIVE_WORKOUT:
      const workout = action.workout;
      newState = merge({}, state, { [workout.id]: workout, selectedWorkout: workout })
      return newState;
    default:
      return state;
  }
}


export default workoutReducer;
