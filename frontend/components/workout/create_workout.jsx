import React from 'react';
import { withRouter } from 'react-router-dom';
import ExerciseIndexContainer from '../exercise/exercise_index_container';
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
    let selected = this.state.name;
    e.preventDefault();
    this.props.createWorkout(this.state)
      .then(
        () => {
          this.setState({name: '', active: newActive, propName: selected});
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
              <div className='create-workout-input-button-con'>
                <input
                  type="text"
                  value={this.state.name}
                  placeholder="Add Workout"
                  maxLength="20"
                  onChange={this.update('name')}
                  className="new-workout-input"
                  />
                <button className="new-workout-button">Create</button>
              </div>
            </form>
          ) : this.state.active === 'SECOND' ? (
          <ExerciseIndexContainer  user={this.props.user}
                                   exercises={this.props.exercises}
                                   liftname={this.state.propName}/>
          ) : null }
        </div>
      )
    }

}

export default withRouter(CreateWorkout)
