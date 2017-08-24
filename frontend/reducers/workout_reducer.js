import { RECEIVE_WORKOUT } from '../actions/workout/workout_actions'
import merge from 'lodash/merge';

const workoutReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState;

  switch(action.type) {
    case RECEIVE_WORKOUT:
      const workout = action.workout;
      newState = merge({}, state, { selectedWorkout: workout })
      return newState;
    default:
      return state;
  }
}
