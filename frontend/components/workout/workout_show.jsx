import React from 'react';
import values from 'lodash/values'
class WorkoutShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const setArray = values(this.props.selectedWorkout.setresults)
    debugger
    const results = setArray.map(result => {
      if (result.workout_id === this.props.selectedWorkout.id) {
        return <li key={result.id}>{result.weight_lifted}
                   {result.weight_unit}
                   {result.reps}
                   {result.distance}
                   {result.distance_unit}
                   {result.duration}
                  </li>
      }
    })
    debugger
    return (
      <div className="workout-show-main">
        <h3 className="workout-show-title">{this.props.selectedWorkout.name}</h3>
        <ul>
          {results}
        </ul>
      </div>
    );
  }

}

export default WorkoutShow;
