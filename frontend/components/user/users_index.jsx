import React from 'react';
import { withRouter } from 'react-router';

class UsersIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllUsers();
  }

  render() {
    const members = this.props.members.map(member => <li key={member.id}>{member.username}</li>)
    return (
      <div>
        <ul></ul>
      </div>
    )
  }
}


export default withRouter(UsersIndex);
