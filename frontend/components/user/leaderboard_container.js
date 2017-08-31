import { connect } from 'react-redux';
import Leaderboard from './leaderboard';
import { requestAllUsers } from '../../actions/user/user_actions'
import { selectAllMembers } from '../../reducers/selectors'
import { requestAllExercises } from '../../actions/exercise/exercise_actions'

const mapStateToProps = state => {
  return {
    members: selectAllMembers(state),
    allExercises: state.entities.exercise
  }
};

const mapDispatchToProps = dispatch => ({
  requestAllUsers: () => dispatch(requestAllUsers()),
  requestAllExercises: () => dispatch(requestAllExercises())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboard)
