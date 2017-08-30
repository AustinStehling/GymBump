import { connect } from 'react-redux';
import SearchBestWorkouts from './search_bestworkouts'
import { requestAllExercises } from '../../actions/exercise/exercise_actions'

const mapStateToProps = state => {
  return {
    exercises: state.entities.exercise  
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestAllExercises: () => dispatch(requestAllExercises())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBestWorkouts)
