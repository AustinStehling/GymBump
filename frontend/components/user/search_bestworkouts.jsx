import React from 'react';
import { withRouter } from 'react-router';
import values from 'lodash/values';
import { Line, Pie } from 'react-chartjs-2';

class SearchBestWorkouts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: '',
      name: '',
      active: '',
      result: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestAllExercises();
    this.setState({active: 'FIRST'})
  }


  handleChange(e) {
    e.preventDefault(e)
    this.setState({ inputVal: e.target.value })
  }

  handleClick(e) {
    this.setState({ inputVal: e.currentTarget.attributes.value.value})
  }

  handleSubmit(e) {
    let newActive = this.state.active === 'FIRST' ? 'SECOND' : 'FIRST'
    let allExercises = values(this.props.exercises);

    let selected;
    let name;
    if (newActive === 'SECOND') {
      allExercises.forEach(exercise => {
        if (exercise.exercise_name === this.state.inputVal) {
          selected = exercise,
          name = exercise.exercise_name
        }
      })
      e.preventDefault();
      if (!name) {
        this.setState({inputVal: 'Invalid Input, Please try Again'})
        return 'Invalid Input'
      }

      this.setState({inputVal: '', active: newActive, name: name})
      this.props.requestAllExercises();
    } else if (newActive === 'FIRST') {
      this.setState({inputVal: '', active: newActive, name: '' })
    }

  }

  render () {

    let allWorkouts = this.props.allWorkouts || []
    let exercises = this.props.exercises || []

    let setResults = allWorkouts.map(workout => {
      return values(workout.setresults)
    })

    let mergedSets = [].concat.apply([], setResults)

    const allResults = {}
    const exerciseTypes = {}
    const completedExercises = {};

    for (var i = 0; i < mergedSets.length; i++) {
      let set = mergedSets[i];
      let exercise = exercises[set.exercise_id]
      let name = exercise.exercise_name
      let bodypart = exercise.bodypart

      if (exerciseTypes[bodypart]) {
        exerciseTypes[bodypart] += 1
      } else if (!exerciseTypes[bodypart]) {
        exerciseTypes[bodypart] = 1
      }

      if (exercise.ex_type === 'lift') {
        if (!allResults[name]) {
          allResults[name] = { labels: [],
                               datasets: [{
                                 label: 'Weight over Time',
                                 backgroundColor: '#2988BC',
                                 borderColor: '#2F496E',
                                 data: [],
                              }],
                            };
        }


        if (completedExercises[name] < (set.weight_lifted)) {
          completedExercises[name] = set.weight_lifted
        } else if (!completedExercises[name]) {
          completedExercises[name] = set.weight_lifted
        }

        allResults[name].labels.push(allResults[name].labels.length + 1)
        allResults[name].datasets[0].data.unshift(set.weight_lifted)
      }


    }


    const PieChart = {
      datasets: [{
        data: Object.values(exerciseTypes),
        backgroundColor: [
          '#2D4262', '#363237', '#73605B', '#D09683'
        ],
      }],

      labels: Object.keys(exerciseTypes)
    };




    const best = Object.keys(completedExercises).map((exercise) => {
      if (this.state.inputVal === '') return [];
      let bests = [];
      if (this.state.inputVal.length > 0) {
        for (var j = 0; j < this.state.inputVal.length; j++) {
          bests = [];
          if (exercise.slice(0, j + 1).toUpperCase() === this.state.inputVal.slice(0, j + 1).toUpperCase()) {
            bests.push(<li onClick={this.handleClick}
                             value={exercise}
                             className="best-lift-li"
                             key={exercise.id}>{exercise}</li>);
          }
        }
      } else {
        bests.push(<li onClick={this.handleClick}
                         value={exercise}
                         className="best-lift-li"
                         key={exercise.id}>{exercise}</li>)
      }
      return bests;
    });

    return (
     <div>
       {this.state.active === 'FIRST' ? (
         <div className="best-lift-div">
           <div className='best-lift-div-two'>
             <h3 className="best-lift-title">Personal Records</h3>
             <div className='best-lift-input-div'>
               <input type="text" value={this.state.inputVal}
                 onChange={this.handleChange}
                 className="best-lift"
                 placeholder="Enter an Exercise"
                 />
             </div>
             <ul className='best-lift-ul'>
               {best}
             </ul>
             <button className='best-lift-button' onClick={this.handleSubmit}>Best Lift</button>
           </div>


         </div>
       ) : this.state.active === 'SECOND' ? (
         <div className="best-lift-div">
           <div className='best-lift-div-two'>
             <h3 className="best-lift-title">
               {this.state.name}: {completedExercises[this.state.name]}</h3>
             <div className='chart-background'>
               <Line width={250} height={200} data={allResults[this.state.name]}/>
             </div>
             <button className='best-lift-button' onClick={this.handleSubmit}>Back</button>
           </div>
           <div className='best-lift-div-three'>
             <h3 className="best-lift-title">Workout Analysis</h3>
             <div className='pie-chart-background'>
               <Pie circumfrence={100} data={PieChart} />
             </div>
           </div>
         </div>
       ) : null}
     </div>
    )
  }
}


export default withRouter(SearchBestWorkouts)
