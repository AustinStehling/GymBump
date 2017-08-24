import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

class UserShow extends React.Component {
  constructor(props) {
    super(props);

  }
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

    const { member } = this.props;
    const allWorkouts = this.props.member.workouts;

    const workouts = allWorkouts.map(workout => <li className="li-workout-list" key={workout.id}>
                                            <div className="created-workout">{workout.created_at.slice(5,10)}</div>
                                            <div className="workout-name">{workout.name}</div></li>)

    return (
      <div className='div-main'>
        <div className='member-stats'>
          <ul >
            <li className="user-stats">{member.first_name}</li>
            <li className="user-stats">{member.last_name}</li>
          </ul>
        </div>
        <div>
          <InfiniteScroll>
            <div className='div-workout-list'>
              <ul>
                {workouts}
              </ul>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}










export default UserShow;
