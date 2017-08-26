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


}







export defaul CreateSetResult;
