import React from 'react';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.requestUser(this.props.match.params.userId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestUser(nextProps.match.params.userId);
    }
  }

  render() {
    if (!this.props.member) return null;
    let row1;
    let row2;
    let row3;
    let row4;
    const { member } = this.props;
    const allWorkouts = this.props.member.workouts;

    if (allWorkouts.length > 28) {
      row1 = allWorkouts.slice(allWorkouts.length - 28).
        map(workout => <td className="li-workout-list" key={workout.id}>{workout.name}</td>)
      row2 = allWorkouts.slice(allWorkouts.length - 21).
        map(workout => <td className="li-workout-list" key={workout.id}>{workout.name}</td>)
      row3 = allWorkouts.slice(allWorkouts.length - 14).
        map(workout => <td className="li-workout-list" key={workout.id}>{workout.name}</td>)
      row4 = allWorkouts.slice(allWorkouts.length - 7).
        map(workout => <td className="li-workout-list" key={workout.id}>{workout.name}</td>)
      } else {
        row1 = allWorkouts.slice(0, 7).
          map(workout => <td className="li-workout-list" key={workout.id}>{workout.name}</td>)
        row2 = allWorkouts.slice(7, 14).
          map(workout => <td className="li-workout-list" key={workout.id}>{workout.name}</td>)
        row3 = allWorkouts.slice(14, 21).
          map(workout => <td className="li-workout-list" key={workout.id}>{workout.name}</td>)
        row4 = allWorkouts.slice(21, 28).
          map(workout => <td className="li-workout-list" key={workout.id}>{workout.name}</td>)
      }

    return (
      <div className='div-main'>
        <div className='member-stats'>
          <ul >
            <li className="user-stats">{member.first_name}</li>
            <li className="user-stats">{member.last_name}</li>
          </ul>
        </div>
        <div className='div-workout-list'>
          <table className="ul-workout-list">
            <tbody>
              <tr>
                {row1}
              </tr>
              <tr>
                {row2}
              </tr>
              <tr>
                {row3}
              </tr>
              <tr>
                {row4}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}










export default UserShow;
