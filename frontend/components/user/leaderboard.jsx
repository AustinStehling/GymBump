import React from 'react';
import { withRouter } from 'react-router';
import values from 'lodash/values'
import { Pie } from 'react-chartjs-2';

class Leaderboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = { exercise: null }
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount() {
    this.props.requestAllUsers();
    this.props.requestAllExercises();
  }

  handleUpdate(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    const members = this.props.members.map(member => {
      return <li className="members-list" key={member.id + 1}>{member.username}</li>
    })

    const memberId = {}
    this.props.members.map(member => {
      memberId[member.username] = member
    })

    const membersSetResults = {}
    const membersLiftMaxes = {}
    const completedMemberExercises = []
    const completedExercises = {}

    this.props.members.map(member => {

      if (member.workouts) {
        let workouts = values(member.workouts)
        for (var i = 0; i < workouts.length; i++) {
          let workoutResult = workouts[i].setresults
          let results = values(workoutResult)
          if (membersSetResults[member.username]) {
            membersSetResults[member.username].unshift(results)
          } else {
            membersSetResults[member.username] = [results];
          }
        }
      }
    })

    Object.keys(membersSetResults).map(member => {
      let setResults = membersSetResults[member]
      membersLiftMaxes[member] = {}
      for (var i = 0; i < setResults.length; i++) {
        let sets = setResults[i]
        for (var j = 0; j < sets.length; j++) {
          let currentExercise = this.props.allExercises[sets[j].exercise_id]
          let exercise = currentExercise.exercise_name

          if (completedMemberExercises.indexOf(exercise) < 0) {
            completedMemberExercises.push(exercise)
          }

          if (completedExercises[exercise]) {
            completedExercises[exercise] += 1
          } else if (!completedExercises[exercise]) {
            completedExercises[exercise] = 1
          }

          if (currentExercise.ex_type === 'lift') {
            if (membersLiftMaxes[member][exercise]) {
              if(membersLiftMaxes[member][exercise] < sets[j].weight_lifted) {
                membersLiftMaxes[member][exercise] = sets[j].weight_lifted
              }
            } else if (!membersLiftMaxes[member][exercise]) {
                membersLiftMaxes[member][exercise] = sets[j].weight_lifted
            }
          }
        }
       }
     })


       const PieChart = {
         datasets: [{
           data: Object.values(completedExercises),
           backgroundColor: [
             '#2D4262', '#363237', '#73605B', '#D09683'
           ],
         }],

         labels: Object.keys(completedExercises)
       };



     let exerciseDropdown = completedMemberExercises.map((exercise, idx) => {
       return <option key={idx} value={exercise}>{exercise}</option>
     })

     let sorted = [];
     const memberAndMax = {}
     Object.keys(membersLiftMaxes).map(member => {
       if (this.state.exercise) {
         let exerciseMax = membersLiftMaxes[member][this.state.exercise]

         if(!memberAndMax[this.state.exercise]){
           memberAndMax[this.state.exercise] = []
           memberAndMax[this.state.exercise].push([member, exerciseMax])
         } else if (memberAndMax[this.state.exercise]) {
           memberAndMax[this.state.exercise].push([member, exerciseMax])
         }

         memberAndMax[this.state.exercise].map(max => {
           if (sorted.indexOf(max) < 0) {
             if (max[1] > 0) {
               sorted.push(max)
             }
           }
         })

         sorted.sort((a, b) => {
           return a[1] - b[1]
         })
       }
     })

     let maxLis = sorted.reverse().map((user) => {
       return <li className="members-list" key={memberId[user[0]].id}>
                            <p className="members-list-p">{user[0]}</p>
                            <p className="members-list-p-two">{user[1]}</p></li>
     })




    return (

      <div className='main-leaderboard'>
        <div className='lb-reset-div'>
          <button className='lb-reset-button' onClick={() => this.setState({exercise: null})}>Reset</button>
          <select className='leaderboard-dropdown' onChange={this.handleUpdate('exercise')}>
            <option>Please Select</option>
            {exerciseDropdown}
          </select>
        </div>
        {(this.state.exercise) ? (
          <ul className='leaderboard-ul'>
            <li className="members-list"><p className="members-list-p">Name</p>
            <p className="members-list-p-two">Max (lbs)</p></li>
            {maxLis}
          </ul>
        ): (!this.state.exercise) ? (
          <ul className='leaderboard-ul'>
            {members}
          </ul>
        ): null}
          <div className='pie-chart-div-lb'>
            <Pie circumfrence={300} data={PieChart}/>
          </div>
      </div>
    )
  }
}


export default withRouter(Leaderboard);
