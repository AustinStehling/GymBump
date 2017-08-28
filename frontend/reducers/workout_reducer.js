import { RECEIVE_WORKOUT, SELECT_WORKOUT } from '../actions/workout/workout_actions';
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
      return merge({}, state, workouts, { selectedWorkout: workouts[0] })
    case RECEIVE_WORKOUT:
      const workout = action.workout;
      newState = merge({}, state, { [workout.id]: workout, selectedWorkout: workout })
      return newState;
    case SELECT_WORKOUT:
      const selected = action.workout;
      newState = merge({}, state, { selectedWorkout: selected })
      return newState;
    default:
      return state;
  }
}


export default workoutReducer;
