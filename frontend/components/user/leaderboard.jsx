import React from 'react';
import { withRouter } from 'react-router';

class Leaderboard extends React.Component {
  componentDidMount() {
    this.props.requestAllUsers();
  }

  render() {
    debugger
    const members = this.props.members.map(member => <li className="members-list" key={member.id}>{member.username}</li>)
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
