import * as APIUtil from '../util/workout/workout_util'

export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT'
export const CREATE_WORKOUT = 'CREATE_WORKOUT'

export const createWorkout = workout => {
  return {
    type: CREATE_WORKOUT,
    workout
  };
};

export const receiveWorkout = workout => {
  return {
    type: RECEIVE_WORKOUT,
    workout
  };
};

export const requestWorkout = id => dispatch => {
  APIUtil.fetchWorkout(id).then(workout => {
    return dispatch(receiveWorkout(workout));
  });
};

export const newWorkout = workout => dispatch => {
  return APIUtil.createWorkout(workout).then(workout => {
    return dispatch(receiveWorkout(workout));
  });
};
