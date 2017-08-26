import React from 'react';

class CreateSetResult extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.state = {
      weight_lifted: '',
      weight_unit: '',
      reps: '',
      distance: '',
      distance_unit: '',
      duration: '',
      exercise_id: this.props.exercise,
      workout_id: this.props.workout
    }
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
            duration: '',
            exercise: '',
            workout: ''
          })
        }
      );
  }

  handleUpdate(property) {
    return e => this.setState({ [property]: e.target.value })
  }

  render () {
    debugger
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='setresult-from'>
            <input
              type="number"
              placeholder='Weight'
              className="new-workout-input"
              value={this.state.weight_lifted}
              onChange={this.handleUpdate('weight_lifted')}
            />
            <select value={this.state.weight_unit} onChange={this.handleUpdate('weight_unit')}>
              <option>Unit</option>
              <option value="lb">lb</option>
              <option value="kg">kg</option>
            </select>
            <input
              type="number"
              placeholder='Reps'
              className="new-workout-input"
              value={this.state.reps}
              onChange={this.handleUpdate('reps')}
            />
            <input
              type="number"
              placeholder='Distance'
              className="new-workout-input"
              value={this.state.distance}
              onChange={this.handleUpdate('distance')}
            />
            <select value={this.state.distance_unit} onChange={this.handleUpdate('distance_unit')}>
              <option>Unit</option>
              <option value="mi">lb</option>
              <option value="km">kg</option>
            </select>
            <input
              type="time"
              step="1"
              className="new-workout-input"
              className="duration"
              value={this.state.duration}
              onChange={this.handleUpdate('duration')}
               />
          <button>Add Result</button>
        </form>
      </div>
   );
  }

}


export default CreateSetResult;
