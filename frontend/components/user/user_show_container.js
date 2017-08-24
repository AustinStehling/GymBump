import UserShow from './user_show';
import { connect } from 'react-redux';
import { requestUser } from '../../actions/user/user_actions'
import { selectMembersWorkouts } from '../../reducers/selectors'

const mapStateToProps = state => ({
  member: state.entities.members.selected,
  workouts: selectMembersWorkouts(state)
});


const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow)
