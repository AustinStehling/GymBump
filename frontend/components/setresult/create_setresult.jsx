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
      <form>
        <label>
          Weight
          <input




            />
        </label>
        <label>
          Units
          <select>
            <option>Select</option>
            <option value="lb">lb</option>
            <option value="kg">kg</option>
          </select>
        </label>
        <label>
          Reps
          <input



            />
        </label>
        <label>
          Distance
          <input



            />
        </label>
        <label>
          Units
          <select>
            <option>Select</option>
            <option value="mi">lb</option>
            <option value="km">kg</option>
          </select>
        </label>
        <label>
          Duration
          <input
            type='time'


            />
        </label>
      </form>
    </div>
  }

}







export defaul CreateSetResult;
