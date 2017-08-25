import React from 'react';
import { withRouter } from 'react-router-dom';

class ExerciseIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllExercises();
  }

  render() {


    let allExercises = this.props.allExercises;
    let exercises = allExercises.map(exercise => <option key={exercise.id}>
                                            {exercise.exercise_name}</option>);

    return (
      <div>
        <select>
          <option>Please Choose</option>
          {exercises}
        </select>
      </div>
    );
  }
}

export default withRouter(ExerciseIndex);
