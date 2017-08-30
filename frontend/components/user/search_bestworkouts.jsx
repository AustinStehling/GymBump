import React from 'react';
import { withRouter } from 'react-router';
import values from 'lodash/values';

class SearchBestWorkouts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: '',
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.requestAllExercises();
  }

  handleChange(e) {
    this.setState({ inputVal: e.target.value })
  }


  render () {

    let allWorkouts = this.props.allWorkouts;
    let exercises = this.props.exercises;

    let setResults = allWorkouts.map(workout => {
      return values(workout.setresults)
    })

    let mergedSets = [].concat.apply([], setResults)

    const completedExercises = {};

    for (var i = 0; i < mergedSets.length; i++) {
      let set = mergedSets[i];
      let exercise = exercises[set.exercise_id]
      let name = exercise.exercise_name
      if (exercise.ex_type === 'lift') {
        if (completedExercises[name] < (set.weight_lifted)) {
          completedExercises[name] = set.weight_lifted
        } else if (!completedExercises[name]) {
          completedExercises[name] = set.weight_lifted
        }
      }
    }
    debugger
    // const match = completedExercises.map((exercise) => {
    //   if (this.state.inputVal === '') return [];
    //   let matched = [];
    //   if (this.state.inputVal.length > 0) {
    //     for (var j = 0; j < this.state.inputVal.length; j++) {
    //       matched = [];
    //       if (exercise.slice(0, j + 1).toUpperCase() === this.state.inputVal.slice(0, j + 1).toUpperCase()) {
    //         matched.push(<li onClick={this.handleClick}
    //                          value={exercise}
    //                          className="workout-auto-li"
    //                          key={exercise.id}>{exercise}</li>);
    //       }
    //     }
    //   } else {
    //     matched.push(<li onClick={this.handleClick}
    //                      value={exercise}
    //                      className="workout-auto-li"
    //                      key={exercise.id}>{exercise}</li>)
    //   }
    //   return matched;
    // });

    return (
      <div>
        <input/>
      </div>
    )
  }
}


export default withRouter(SearchBestWorkouts)
