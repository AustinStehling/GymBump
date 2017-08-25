import React from 'react';
import { withRouter } from 'react-router-dom';

class ExerciseIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { inputVal: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ inputVal: event.target.value })
  }

  componentDidMount() {
    this.props.requestAllExercises();
  }



  render() {


    let allExercises = this.props.allExercises;


    const match = allExercises.map((exercise) => {
      let matched = [];
      if (this.state.inputVal.length > 0) {
        for (var j = 0; j < this.state.inputVal.length; j++) {
          matched = [];
          if (exercise.exercise_name.slice(0, j + 1).toUpperCase() === this.state.inputVal.slice(0, j + 1).toUpperCase()) {
            matched.push(<option>{exercise.exercise_name}</option>);
          }
        }
      } else {
        matched.push(<option key={exercise.id}>{exercise.exercise_name}</option>)
      }
      return matched;
    });


    return (
      <div>
        <div>
          <label>
            Search:
            <input type="text" value={this.state.inputVal} onChange={this.handleChange}/>
          </label>
        </div>
        <select>
          {match}
        </select>
      </div>
    );
  }
}

export default withRouter(ExerciseIndex);
