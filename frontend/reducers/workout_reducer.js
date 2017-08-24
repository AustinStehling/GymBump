import { RECEIVE_WORKOUT } from '../actions/workout/workout_actions'
import { RECEIVE_USER } from '../actions/user/user_actions'
import merge from 'lodash/merge';

const workoutReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState;

  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.user.workouts)
    case RECEIVE_WORKOUT:
      const workout = action.workout;
      newState = merge({}, state, { selectedWorkout: workout.id })
      return newState;
    default:
      return state;
  }
}


export default workoutReducer;
