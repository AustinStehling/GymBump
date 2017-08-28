import React from 'react';
import ExerciseIndexContainer from '../exercise/exercise_index_container'

class CreateSetResult extends React.Component {
  constructor(props) {
    super(props);
    let workout = this.props.user.workouts
    let exercise = this.props.exercises
    this.state = {
      weight_lifted: '',
      weight_unit: '',
      reps: '',
      distance: '',
      distance_unit: '',
      hour: '',
      min: '',
      sec: '',
      exercise_id: exercise[exercise.length - 1].id,
      workout_id: workout[workout.length - 1],
      active: null

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSet(this.state)
      .then(
        () => {
          this.setState({
            weight_lifted: '',
            weight_unit: '',
            reps: '',
            distance: '',
            distance_unit: '',
            hour: '',
            min: '',
            sec: '',
            exercise: '',
            workout: '',
            active: 'FIRST'
          })
        }
      );
  }

  handleUpdate(property) {
    return e => this.setState({ [property]: e.target.value })
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ active: 'NEWEXERCISE' })
  }

  render () {

    return (
    <div>
      {this.state.active === null ? (
        <div className="set-result-form-container">
          <form className="setresult-form" >
            <h3>{this.props.exercise}, how'd it go?</h3>
            <div>
              <input
                type="number"
                placeholder='Weight'
                className="new-set"
                value={this.state.weight_lifted}
                onChange={this.handleUpdate('weight_lifted')}
                />
              <select className="unit" value={this.state.weight_unit} onChange={this.handleUpdate('weight_unit')}>
                <option>Unit</option>
                <option value="lb">lb</option>
                <option value="kg">kg</option>
              </select>
              <input
                type="number"
                placeholder='Reps'
                className="new-set"
                value={this.state.reps}
                onChange={this.handleUpdate('reps')}
                />
            </div>
            <div className='cardio-div'>
              <input
                type="number"
                placeholder='Distance'
                className="new-set"
                value={this.state.distance}
                onChange={this.handleUpdate('distance')}
                />
              <select className="unit" value={this.state.distance_unit} onChange={this.handleUpdate('distance_unit')}>
                <option>Unit</option>
                <option value="mi">mi</option>
                <option value="km">km</option>
              </select>
              <div className="set-time-div">
                <input
                  type="number"
                  className="new-set-time"
                  placeholder="h"
                  min='0'
                  value={this.state.hour}
                  onChange={this.handleUpdate('hour')}
                  />
                <p>:</p>
                <input
                  type="number"
                  className="new-set-time"
                  placeholder="m"
                  min='0'
                  max='59'
                  value={this.state.min}
                  onChange={this.handleUpdate('min')}
                  />
                <p>:</p>
                <input
                  type="number"
                  className="new-set-time"
                  placeholder="s"
                  min='0'
                  max='59'
                  value={this.state.sec}
                  onChange={this.handleUpdate('sec')}
                  />
              </div>
            </div>
               <button onClick={this.handleSubmit} className="new-set-button">Add Result</button>
          </form>
          <button onClick={this.handleClick} className="new-set-button">Next Exercise</button>
        </div>
      ) : this.state.active === 'FIRST' ? (
        <div className="set-result-form-container">
          <form className="setresult-form" >
            <h3>Next set of {this.props.exercise}</h3>
            <div>
              <input
                type="number"
                placeholder='Weight'
                className="new-set"
                value={this.state.weight_lifted}
                onChange={this.handleUpdate('weight_lifted')}
                />
              <select className="unit" value={this.state.weight_unit} onChange={this.handleUpdate('weight_unit')}>
                <option>Unit</option>
                <option value="lb">lb</option>
                <option value="kg">kg</option>
              </select>
              <input
                type="number"
                placeholder='Reps'
                className="new-set"
                value={this.state.reps}
                onChange={this.handleUpdate('reps')}
                />
            </div>
            <div className='cardio-div'>
              <input
                type="number"
                placeholder='Distance'
                className="new-set"
                value={this.state.distance}
                onChange={this.handleUpdate('distance')}
                />
              <select className="unit" value={this.state.distance_unit} onChange={this.handleUpdate('distance_unit')}>
                <option>Unit</option>
                <option value="mi">mi</option>
                <option value="km">km</option>
              </select>
              <div className="set-time-div">
                <input
                  type="number"
                  className="new-set-time"
                  placeholder="h"
                  min='0'
                  value={this.state.hour}
                  onChange={this.handleUpdate('hour')}
                  />
                <p>:</p>
                <input
                  type="number"
                  className="new-set-time"
                  placeholder="m"
                  min='0'
                  max='59'
                  value={this.state.min}
                  onChange={this.handleUpdate('min')}
                  />
                <p>:</p>
                <input
                  type="number"
                  className="new-set-time"
                  placeholder="s"
                  min='0'
                  max='59'
                  value={this.state.sec}
                  onChange={this.handleUpdate('sec')}
                  />
              </div>
            </div>
               <button onClick={this.handleSubmit} className="new-set-button">Add Result</button>
          </form>
          <button onClick={this.handleClick} className="new-set-button">Next Exercise</button>
        </div>
      ) : this.state.active === 'NEWEXERCISE' ? (
        <ExerciseIndexContainer user={this.props.user} exercises={this.props.exercises} liftname={this.props.liftname}/>
      ) : null }
    </div>
   );
  }

}


export default CreateSetResult;
