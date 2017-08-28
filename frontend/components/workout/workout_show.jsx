import React from 'react';
import values from 'lodash/values'
class WorkoutShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const setArray = values(this.props.selectedWorkout.setresults)
    const exercises = this.props.exercises
    const results = setArray.map(result => {
      if (result.workout_id === this.props.selectedWorkout.id) {
        return <li key={result.id} className='workout-show-li'>
                   <p className='workout-title'>{exercises[result.exercise_id].exercise_name}</p>
                   <ul>
                     <li className='workout-result-li'><p>Weight:</p>{result.weight_lifted}{result.weight_unit}</li>
                     <li className='workout-result-li'><p>Reps:</p>{result.reps}</li>
                     <li className='workout-result-li'><p>Distance:</p>{result.distance}{result.distance_unit}</li>
                     <li className='workout-result-li'><p>Duration:</p>{result.duration}</li>
                   </ul>
                  </li>
      }
    })

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
