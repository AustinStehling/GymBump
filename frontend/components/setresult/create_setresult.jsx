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
      exercise: '',
      workout: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSet(this.state).then(
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
    e => this.setState({ [property]: e.target.value })
  }

  render () {

    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Weight:
          <input
            type="integer"
            value={this.state.weight_lifted}
            onChange={this.handleUpdate('weight_lifted')}
          />
        </label>
        <label>
          Units:
          <select value={this.state.weight_unit} onChange={this.handleUpdate('weight_unit')}>
            <option>Select</option>
            <option value="lb">lb</option>
            <option value="kg">kg</option>
          </select>
        </label>
        <label>
          Reps:
          <input
            type="integer"
            value={this.state.reps}
            onChange={this.handleUpdate('reps')}
          />
        </label>
        <label>
          Distance:
            <input
              type="integer"
              value={this.state.distance}
              onChange={this.handleUpdate('distance')}
            />
        </label>
        <label>
          Units:
          <select value={this.state.distance_unit} onChange={this.handleUpdate('distance_unit')}>
            <option>Select</option>
            <option value="mi">lb</option>
            <option value="km">kg</option>
          </select>
        </label>
        <label>
          Duration:
          <input
            type="time"
            step="1"
            value={this.state.duration}
            onChange={this.handleUpdate('duration')}
             />
        </label>
        <button>Add Result</button>
      </form>
    </div>
  }

}







export defaul CreateSetResult;
