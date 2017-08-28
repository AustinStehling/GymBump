import { connect } from 'react-redux';
import WorkoutShow from './workout_show';
import { requestWorkout } from '../../actions/workout/workout_actions';

const mapDispatchToProps = dispatch => ({
  requestWorkout: workout => dispatch(requestWorkout(workout))
})

export default connect(
  null,
  mapDispatchToProps
)(WorkoutShow)
