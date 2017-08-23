import { RECEIVE_USER } from '../actions/user/user_actions';
import merge from 'lodash/merge';



const userReducer = (state = null, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_USER:
      return action.payload.user.id;
    default:
      return state;
  }
}


export default userReducer;
