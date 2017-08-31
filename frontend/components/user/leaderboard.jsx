import React from 'react';
import { withRouter } from 'react-router';
import values from 'lodash/values'
class Leaderboard extends React.Component {
  componentDidMount() {
    this.props.requestAllUsers();
    this.props.requestAllExercises();
  }

  render() {
    const members = this.props.members.map(member => {
      return <li className="members-list" key={member.id}>{member.username}</li>
    })

    const membersSetResults = {}
    const membersLiftMaxes = {}

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
     }
   )
   debugger


    // for (var i = 0; i < members.length; i++) {
    //   members[i]
    // }


    return (

      <div>
        <ul>
          {members}
        </ul>
      </div>
    )
  }
}


export default withRouter(Leaderboard);
