import { connect } from 'react-redux';
import ExerciseIndex from './exercise_index';
import { selectAllExercises } from '../../reducers/selectors';
import { requestAllExercises, receiveExercise } from '../../actions/exercise/exercise_actions'

const mapStateToProps = state => ({
  allExercises: selectAllExercises(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllExercises: () => dispatch(requestAllExercises()),
  requestExercise: exercise => dispatch(receiveExercise(exercise))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseIndex);
