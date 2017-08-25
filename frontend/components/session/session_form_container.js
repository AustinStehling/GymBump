import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  login: user => dispatch(login(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
