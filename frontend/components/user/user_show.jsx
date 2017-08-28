import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import CreateWorkoutContainer from '../workout/create_workout_container'
import ExerciseIndexContainer from '../exercise/exercise_index_container'
import SetResultContainer from '../setresult/create_setresult_container'
import WorkoutShowContainer from '../workout/workout_show_container'

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this._onButtonClick = this._onButtonClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { active: null, selected: this.props.selectedWorkout }
  }


  componentDidMount() {
    this.props.requestUser(this.props.match.params.userId),
    this.props.requestAllExercises();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestUser(nextProps.match.params.userId);
    }
  }

   _onButtonClick() {
     let newActive;
     if (this.state.active === null) {
       newActive = 'FIRST';
     } else {
       newActive = null;
     }
     this.setState({
       active: newActive
     });
   }

   handleClick(e) {
     e.preventDefault();
     let key = e.target.title
     let array = this.props.workouts
     let value = ''
     array.forEach(workout => {
       if (workout.id === parseInt(key, 10)) value = workout
     })
     debugger
     this.setState({ selected: value })
   }

  render() {

    if (!this.props.member) return null;
    const { member } = this.props;
    const allWorkouts = this.props.workouts;

    const workouts = allWorkouts.map(workout => <li className="li-workout-list"
                                                    key={workout.id}
                                                    title={workout.id}
                                                    onClick={this.handleClick}>
                              <div className="created-workout">{workout.created_at.slice(5,10)}</div>
                              <div className="workout-name">{workout.name}</div></li>)
    let buttonText;
    {if (this.state.active === 'FIRST') {
      buttonText = 'Submit Workout'
    } else {
      buttonText = 'Create Workout'
    }}

    return (
      <div className='div-main'>
        <div className='div-member-stats'>
          <ul >
            <img src={member.avatar_url}/>
            <li className="user-stats">{member.first_name}</li>
            <li className="user-stats">{member.last_name}</li>
          </ul>
        </div>
        <div>
          <div className="new-workout-and-workouts">

          <div className='div-create-workout'>
            {this.state.active === 'FIRST' ? (
              <CreateWorkoutContainer user={this.props.member} exercises={this.props.exercises} />
            ) : null}
            <button className="add-workout-button" onClick={this._onButtonClick}>{buttonText}</button>
           </div>

           <h3 className="new-workout">{this.props.member.username}&#39;s Workouts</h3>
          <InfiniteScroll>
            <div className='div-workout-list'>
              <ul>
                {workouts}
              </ul>
            </div>
          </InfiniteScroll>


        </div>
       </div>
       <div className="placeholder">
       </div>
        {!this.state.selected ? (
          null
        ) : <WorkoutShowContainer selectedWorkout={this.state.selected} />}
      </div>
    )
  }
}


export default UserShow;
