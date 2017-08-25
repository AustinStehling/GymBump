import React from 'react';
import { withRouter } from 'react-router-dom';
import ExerciseIndexContainer from '../exercise/exercise_index_container'

class CreateWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      active: 'FIRST'
    };
    this.handleSumbit = this.handleSumbit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSumbit(e) {
    let newActive = this.state.active === 'FIRST' ? 'SECOND' : null
    e.preventDefault();
    this.props.createWorkout(this.state)
      .then(
        () => {
          this.setState({name: '', active: newActive});
        }
      );
    }


   update(property) {
     return e => this.setState({ [property]: e.target.value })
   }

    render () {

      return (
        <div>
          {this.state.active === 'FIRST' ? (
            <form className="create-workout-form" onSubmit={this.handleSumbit}>
              <h3 className="new-workout">{this.props.member}&#39;s Workouts</h3>
              <div className='create-workout-input-button-con'>
                <input
                  type="text"
                  value={this.state.name}
                  placeholder="Add Workout"
                  onChange={this.update('name')}
                  className="new-workout-input"
                  />
                <button className="new-workout-button">Create</button>
              </div>
            </form>
          ) : this.state.active === 'SECOND' ? (
          <ExerciseIndexContainer  allExercises={this.props.allExercises}/>
          ) : null }
        </div>
      )
    }

}

export default withRouter(CreateWorkout)
