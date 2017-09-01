import React from 'react';
import { withRouter } from 'react-router';
import values from 'lodash/values'
class Leaderboard extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { exercise: null }
  }
  componentDidMount() {
    this.props.requestAllUsers();
    this.props.requestAllExercises();


    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    const members = this.props.members.map(member => {
      return <li className="members-list" key={member.id}>{member.username}</li>
    })

    const membersSetResults = {}
    const membersLiftMaxes = {}
    const completedMemberExercises = []

    this.props.members.map(member => {

      if (member.workouts) {
        let workouts = values(member.workouts)
        for (var i = 0; i < workouts.length; i++) {
          let workoutResult = workouts[i].setresults
          let results = values(workoutResult)
          if (membersSetResults[member.username]) {
            membersSetResults[member.username].unshift(results)
          } else {
            membersSetResults[member.username] = [];
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
             sorted.push(max)
           }
         })

         sorted.sort((a, b) => {
           return a[1] - b[1]
         })
       }
     })

     const maxLis = sorted.reverse().map((user, idx) => {
       return <li key={idx}><p>{user[0]}:</p>
                            <p>{user[1]}</p></li>
     })





    return (

      <div>
        <select onChange={this.handleUpdate('exercise')}>
        <option>Please Select</option>
          {exerciseDropdown}
        </select>
        <ul>
          {members}
        </ul>
        <ul>
          {maxLis}
        </ul>
      </div>
    )
  }
}


export default withRouter(Leaderboard);
