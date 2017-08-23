import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  singleUser: userReducer
});

export default rootReducer;
