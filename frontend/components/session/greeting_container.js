import { connect } from 'react-redux';
import Greeting  from './greeting';
import { receiveCurrentUser } from '../../actions/session_actions'

const mapStateToProps = state => {
  const currentUser = state.session.currentUser;

  return {
    currentUser
  };
};


const mapDispatchToProps = dispatch => ({
  receiveCurrentUser: currentUser => dispatch(receiveCurrentUser(currentUser))

})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
