import UserShow from './user_show';
import { connect } from 'react-redux';
import { requestUser, editUser } from '../../actions/user/user_actions'
import { requestAllExercises } from '../../actions/exercise/exercise_actions'
import { selectMembersWorkouts, selectAllExercises } from '../../reducers/selectors'
import { selectYourWorkout } from '../../actions/workout/workout_actions';

const mapStateToProps = state => {
  let selected = selectMembersWorkouts(state).reverse()
  return {
    member: state.entities.members.selected,
    workouts: selected,
    exercises: selectAllExercises(state),
    selectedWorkout: state.entities.workout.selectedWorkout,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id)),
  requestAllExercises: () => dispatch(requestAllExercises()),
  requestWorkout: id => dispatch(selectYourWorkout(id)),
  editUser: (id, user) => dispatch(editUser(id, user))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow)
