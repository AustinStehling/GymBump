import { connect } from 'react-redux';
import ExerciseIndex from './exercise_index';
import { selectAllExercises } from '../../reducers/selectors';
import { requestAllExercises } from '../../actions/exercise/exercise_actions'

const mapStateToProps = state => ({
  allExercises: selectAllExercises(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllExercises: () => dispatch(requestAllExercises())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseIndex);
