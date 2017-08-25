import React from 'react';
import { withRouter } from 'react-router-dom';
import ExerciseIndexContainer from '../exercise/exercise_index_container'

class CreateWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      showComponent: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSumbit(e) {
    e.preventDefault();
    this.props.createWorkout(this.state)
      .then(
        () => {
          this.setState({name: ''});
        }
      );
  }

    _onButtonClick() {
     this.setState({
       showComponent: true,
     });
   }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  }

    render () {

      return (
        <div>
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
              <button onClick={this._onButtonClick} className="new-workout-button">Create</button>
              <div>
                {this.state.showComponent ?
                   <ExerciseIndexContainer  allExercises={this.props.allExercises}/> :
                    null
                  }
              </div>
            </div>
          </form>
        </div>
      )
    }

}

export default withRouter(CreateWorkout)
