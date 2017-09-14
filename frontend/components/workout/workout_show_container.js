import { connect } from 'react-redux';
import WorkoutShow from './workout_show';
import { requestWorkout, deleteWorkout } from '../../actions/workout/workout_actions';
import { requestUser } from '../../actions/user/user_actions'
import { editResult } from '../../actions/setresult/setresult_actions'

const mapStateToProps = state => ({
  exercises: state.entities.exercise || []
});

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id)),
  requestWorkout: workout => dispatch(requestWorkout(workout)),
  deleteWorkout: workout => dispatch(deleteWorkout(workout)),
  editResult: id => disptach(editResult(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutShow)
