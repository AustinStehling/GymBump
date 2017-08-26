import { RECEIVE_ALL_EXERCISES, RECEIVE_EXERCISE } from '../actions/exercise/exercise_actions';
import { CLEAR_ALL } from '../actions/reset_state';
import merge from 'lodash/merge'

const exerciseReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case CLEAR_ALL:
      return {};
    case RECEIVE_EXERCISE:
      return merge({}, state, { selectedExercise: action.exercise })
    case RECEIVE_ALL_EXERCISES:
      return merge({}, state, action.exercises)
    default:
      return state;
  }
}

export default exerciseReducer;
