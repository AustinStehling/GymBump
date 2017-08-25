import { RECEIVE_ALL_EXERCISES } from '../actions/exercise/exercise_actions';
import merge from 'lodash/merge'

const exerciseReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_EXERCISES:
    return merge({}, state, action.exercises)
    default:
      return state;
  }
}

export default exerciseReducer;
