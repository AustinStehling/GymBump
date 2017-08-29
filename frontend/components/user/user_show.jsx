import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import CreateWorkoutContainer from '../workout/create_workout_container';
import ExerciseIndexContainer from '../exercise/exercise_index_container';
import SetResultContainer from '../setresult/create_setresult_container';
import WorkoutShowContainer from '../workout/workout_show_container';
import UpdateForm from './update_form';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this._onButtonClick = this._onButtonClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.state = { active: null, selected: this.props.selectedWorkout, workoutActive: 'FIRST', edit: null }
  }


  componentDidMount() {
    this.props.requestUser(this.props.match.params.userId),
    this.props.requestAllExercises();
    this.props.history.push(`/users/${this.props.currentUser.id}`);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.currentUser) {
      this.props.history.push('/')
    } else if (this.props.currentUser.id !== parseInt(nextProps.match.params.userId)) {
      this.props.history.push(`/users/${this.props.currentUser.id}`);
    }
  }

  toggleEdit(e) {
    e.preventDefault();
    this.setState({ edit: 'ACTIVE' })
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
     this.setState({ selected: value });
     this.props.requestWorkout(value.id);
    //  this.props.requestUser(this.props.match.params.userId);
   }

  render() {

    if (!this.props.member) return null;
    const { member } = this.props;
    const allWorkouts = this.props.workouts;
    let definedWorkouts = [];
    allWorkouts.forEach(workout => {
      if (workout) {
        definedWorkouts.push(workout)
      }
    });
    let workouts = definedWorkouts.map(workout => <li className="li-workout-list"
                                                    key={workout.id}
                                                    title={workout.id}
                                                    onClick={this.handleClick}>
                              <div className="created-workout"
                                onClick={this.handleClick}
                                title={workout.id}>
                                {workout.created_at.slice(5,10)}</div>
                              <div className="workout-name"
                                onClick={this.handleClick}
                                title={workout.id}>
                                {workout.name}</div></li>)


    let buttonText;
    {if (this.state.active === 'FIRST') {
      buttonText = 'Submit Workout'
    } else {
      buttonText = 'Create Workout'
    }}

    return (
      <div className='div-main'>
        {this.state.edit === null ? (
          <div className='div-member-stats'>
            <button onClick={this.toggleEdit}
              className='update-button' >Update</button>

            <ul className="ul-stats">
              <img className="user-prof-pic" src={member.avatar_url}/>
              <li className="user-stats-name"><p>NAME:</p>
              <div>{member.first_name} {member.last_name}</div></li>
              <li className="user-stats"><p>GENDER:</p>
              <div>{member.gender}</div></li>
              <li className="user-stats"><p>BIRTHDAY:</p>
              <div>{member.birthday}</div></li>
              <li className="user-stats"><p>EXPERIENCE:</p>
              <div>{member.experience}</div></li>
              <li className="user-stats"><p>WEIGHT:</p>
              <div>{member.weight}lbs</div></li>
              <li className="user-stats"><p>HEIGHT:</p>
              <div>{member.height_ft}ft {member.height_in}</div>
            </li>
          </ul>
        </div>
      ) : <UpdateForm editUser={this.props.editUser}
                      member={this.props.member}
                      toggleParent={() => this.setState({ edit: null})}
                      requestUser={this.props.requestUser}/>}
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
        ) : <WorkoutShowContainer selectedWorkout={this.state.selected} toggleParent={() => this.setState({ selected: null})}/>}
      </div>
    )
  }
}


export default UserShow;
