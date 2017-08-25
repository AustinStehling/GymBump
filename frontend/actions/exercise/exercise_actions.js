export const RECEIVE_ALL_EXERCISES = 'RECEIVE_ALL_EXERCISES';
import * as APIUtil from '../../util/exercise/exercise_util';

export const receiveAllExercises = exercises => {
  return {
    type: RECEIVE_ALL_EXERCISES,
    exercises
  };
};

export const requestAllExercises = () => dispatch => {
  return APIUtil.fetchExercises().then(exercises => dispatch(receiveAllExercises(exercises)));
};
