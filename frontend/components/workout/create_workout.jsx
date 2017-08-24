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
          <form onSubmit={this.handleSumbit}>
            <h3>New Workout</h3>
            <input
              type="text"
              value={this.state.name}
              placeholder="Name Me"
              onChange={this.update('name')}
              />
            <button>Create</button>
          </form>
        </div>
      )
    }

}

export default withRouter(CreateWorkout)
