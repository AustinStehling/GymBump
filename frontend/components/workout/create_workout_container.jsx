import { connect } from 'react-redux'
import CreateWorkout from './create_workout'
import { newWorkout } from '../../actions/workout/workout_actions'

const mapDispatchToProps = dispatch => ({
  createWorkout: workout => dispatch(newWorkout(workout)),
});

export default connect(
  null,
  mapDispatchToProps
)(CreateWorkout);
