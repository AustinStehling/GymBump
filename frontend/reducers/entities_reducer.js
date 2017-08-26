import usersReducer from './users_reducer';
import { combineReducers } from 'redux';
import workoutReducer from './workout_reducer';
import exerciseReducer from './exercise_reducer';
import setResultReducer from './setresult_reducer';

const entitiesReducer = combineReducers({
  members: usersReducer,
  workout: workoutReducer,
  exercise: exerciseReducer,
  setresult: setResultReducer
})

export default entitiesReducer;
