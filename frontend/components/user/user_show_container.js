import UserShow from './user_show';
import { connect } from 'react-redux';
import { requestUser } from '../../actions/user/user_actions'
import { requestAllExercises } from '../../actions/exercise/exercise_actions'
import { selectMembersWorkouts, selectAllExercises } from '../../reducers/selectors'

const mapStateToProps = state => ({
  member: state.entities.members.selected,
  workouts: selectMembersWorkouts(state),
  exercises: selectAllExercises(state)
});


const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id)),
  requestAllExercises: () => dispatch(requestAllExercises())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow)
