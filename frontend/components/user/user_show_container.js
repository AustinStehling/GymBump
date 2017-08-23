import { connect } from 'react-redux';
import UserShow from './user_show';
import { logout } from '../../actions/session_actions'
import {requestUser } from '../../actions/user/user_actions'

const mapStateToProps = state => {
  const user = state.singleUser.user
  return {
    user
  };
}

const mapDispatchToProps = dispatch => {
  requestUser: user => dispatch(requestUser(user))
  logout: () => dispatch(logout())
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
