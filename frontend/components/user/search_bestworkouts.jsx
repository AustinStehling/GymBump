import React from 'react';
import { withRouter } from 'react-router';
import values from 'lodash/values';

class SearchBestWorkouts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllExercises();
  }

  render () {

    let allWorkouts = this.props.allWorkouts;
    let exercises = this.props.exercises;

    let setResults = allWorkouts.map(workout => {
      return values(workout.setresults)
    })

    let mergedSets = [].concat.apply([], setResults)

    let completedExercises = [];

    mergedSets.forEach(set => {
      if (completedExercises.indexOf(exercises[set.exercise_id].exercise_name) < 0) {
        completedExercises.push(exercises[set.exercise_id].exercise_name)
      }
    })
    
    return (
      <div>
        <input/>
      </div>
    )
  }
}


export default withRouter(SearchBestWorkouts)
