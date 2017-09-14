import React from 'react';
import { withRouter } from 'react-router-dom';
import SetResultContainer from '../setresult/create_setresult_container';

class ExerciseIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: '',
      active: 'FIRST',
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputVal: e.target.value })
  }

  componentDidMount() {
    this.props.requestAllExercises();
  }

  handleClick(e) {
    this.setState({ inputVal: e.currentTarget.attributes.value.value})
  }

  handleSubmit(e) {
    let newActive = this.state.active === 'FIRST' ? 'SECOND' : null
    let allExercises = this.props.allExercises;
    let selected;
    let name;
    if (allExercises) {
      allExercises.forEach(exercise => {
        if (exercise.exercise_name === this.state.inputVal) {
          selected = exercise,
          name = exercise.exercise_name
        }
      })
      e.preventDefault();
    }
    if (!name) {
      this.setState({inputVal: 'Invalid Input, Please try Again'})
      return 'Invalid Input'
    }
    this.props.requestExercise(selected)
    this.setState({inputVal: '', active: newActive, name: name})
    this.props.requestAllExercises();
  }


  render() {


    let allExercises = this.props.allExercises || []

      let match = allExercises.map((exercise) => {
        if (this.state.inputVal === '') return [];
        let matched = [];
        if (this.state.inputVal.length > 0) {
          for (var j = 0; j < this.state.inputVal.length; j++) {
            matched = [];
            if (exercise.exercise_name.slice(0, j + 1).toUpperCase() === this.state.inputVal.slice(0, j + 1).toUpperCase()) {
              matched.push(<li onClick={this.handleClick}
                               value={exercise.exercise_name}
                               className="workout-auto-li"
                               key={exercise.id}>{exercise.exercise_name}</li>);
            }
          }
        } else {
            matched.push(<li onClick={this.handleClick}
                             value={exercise.exercise_name}
                             className="workout-auto-li"
                             key={exercise.id}>{exercise.exercise_name}</li>)
        }
        return matched;
      });


    return (
      <div>
        {this.props.allExercises ? (
          <div>
            {this.state.active === 'FIRST' ? (
              <div className="exercise-main-div">
                <div className="exercise-second-div">
                  <label className="exercise-label">
                    <h3>Add an Exercise for {this.props.liftname}</h3>
                    <input type="text" value={this.state.inputVal}
                      onChange={this.handleChange}
                      className="exercise-input"
                      />
                  </label>
                  <ul className="exercise-ul">
                    {match}
                  </ul>
                  <button className="new-exercise-button"
                    onClick={this.handleSubmit}>Add Exercise</button>
                </div>
              </div>
            ) : this.state.active === 'SECOND' ? (
              <SetResultContainer user={this.props.user}
                exercises={this.props.exercises}
                exercise={this.state.name}
                liftname={this.props.liftname}/>
            ) : null }
          </div>
        ) : null }
      </div>
    );
  }
}

export default withRouter(ExerciseIndex);
