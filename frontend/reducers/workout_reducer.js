import { RECEIVE_WORKOUT, SELECT_WORKOUT, REMOVE_WORKOUT } from '../actions/workout/workout_actions';
import { RECEIVE_USER } from '../actions/user/user_actions';
import { CLEAR_ALL } from '../actions/reset_state';
import { RECEIVE_SETRESULT } from '../actions/setresult/setresult_actions'

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
    case SELECT_WORKOUT:
      const selectedWorkout = action.workout;
      newState = merge({}, state, { selectedWorkout: selectedWorkout })
      return newState;
    case RECEIVE_SETRESULT:
      const addResult  = { [action.setresult.workout_id]: { setresults : { [action.setresult.id]: action.setresult} }}
      newState = merge({}, state, addResult)
      return newState;
    case REMOVE_WORKOUT:
      newState = merge({}, state, { selectedWorkout: '' })
      delete newState[action.workout.id]
      return newState
    default:
      return state;
  }
}


export default workoutReducer;
