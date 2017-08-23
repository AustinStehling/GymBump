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
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
  form: user => dispatch(processForm(user)),
  formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootRender);
