import usersReducer from './users_reducer';
import { combineReducers } from 'redux';


const entitiesReducer = combineReducers({
  members: usersReducer
})

export default entitiesReducer;
