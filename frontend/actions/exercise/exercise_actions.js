export const RECEIVE_ALL_EXERCISES = 'RECEIVE_ALL_EXERCISES';
export const RECEIVE_EXERCISE = 'RECEIVE_EXERCISE'
import * as APIUtil from '../../util/exercise/exercise_util';

export const receiveAllExercises = exercises => {
  return {
    type: RECEIVE_ALL_EXERCISES,
    exercises
  };
};

export const receiveExercise = exercise => {
  return {
    type: RECEIVE_EXERCISE,
    exercise
  };
};

export const requestAllExercises = () => dispatch => {
  return APIUtil.fetchExercises().then(exercises => dispatch(receiveAllExercises(exercises)));
};
