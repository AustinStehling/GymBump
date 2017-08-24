import usersReducer from './users_reducer';
import { combineReducers } from 'redux';
import workoutReducer from './workout_reducer'

const entitiesReducer = combineReducers({
  members: usersReducer,
  workout: workoutReducer
})

export default entitiesReducer;
