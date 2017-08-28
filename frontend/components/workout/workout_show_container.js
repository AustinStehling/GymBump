import { connect } from 'react-redux';
import WorkoutShow from './workout_show';
import { requestWorkout } from '../../actions/workout/workout_actions';


const mapStateToProps = state => ({
  exercises: state.entities.exercise
})
const mapDispatchToProps = dispatch => ({
  requestWorkout: workout => dispatch(requestWorkout(workout))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutShow)
