import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

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
              <button className="new-workout-button">Create</button>
            </div>
          </form>
        </div>
      )
    }

}

export default withRouter(CreateWorkout)
