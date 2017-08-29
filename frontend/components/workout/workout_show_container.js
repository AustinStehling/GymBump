import { connect } from 'react-redux';
import WorkoutShow from './workout_show';
import { requestWorkout, removeWorkout } from '../../actions/workout/workout_actions';


const mapStateToProps = state => ({
  exercises: state.entities.exercise
})
const mapDispatchToProps = dispatch => ({
  requestWorkout: workout => dispatch(requestWorkout(workout)),
  removeWorkout: workout => dispatch(removeWorkout(workout))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutShow)
