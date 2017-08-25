import { connect } from 'react-redux';
import RootRender from './root_render';
import { login, signup} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: ownProps.location.pathname.slice(1)
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootRender);
