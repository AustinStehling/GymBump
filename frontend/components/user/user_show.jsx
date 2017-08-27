import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import CreateWorkoutContainer from '../workout/create_workout_container'
import ExerciseIndexContainer from '../exercise/exercise_index_container'
import SetResultContainer from '../setresult/create_setresult_container'

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this._onButtonClick = this._onButtonClick.bind(this);


    this.state = { active: null }
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


  render() {
    if (!this.props.member) return null;
    const { member } = this.props;
    const allWorkouts = this.props.workouts;

    const workouts = allWorkouts.map(workout => <li className="li-workout-list" key={workout.id}>
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
      </div>
    )
  }
}


export default UserShow;
