import { connect } from 'react-redux';
import UsersIndex from './users_index';
import { requestAllUsers } from '../../actions/user/user_actions'
import { selectAllMembers } from '../../reducers/selectors'

const mapStateToProps = state => {
  members: selectAllMembers(state);
}

const mapDispatchToProps = dispatch => {
  requestAllUsers: () => dispatch(requestAllUsers(users))
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersIndex)
