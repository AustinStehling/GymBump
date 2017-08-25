import { connect } from 'react-redux';
import Greeting  from './greeting';
import { logout } from '../../actions/session_actions'
import { clearAll } from '../../actions/reset_state'

const mapStateToProps = state => {
  const currentUser = state.session.currentUser;

  return {
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestClear: () => dispatch(clearAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
