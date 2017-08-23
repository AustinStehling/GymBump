import React from 'react';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.requestUser(this.props.match.params.userId)
    debugger
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestUser(nextProps.match.params.userId);
    }
  }

  render() {
    const { member } = this.props;
    if (!this.props.member) return null;

    return (
      <div>
        <ul>
          <li>{member.first_name}</li>
          <li>{member.last_name}</li>
          <li>{member.gender}</li>
        </ul>
      </div>
    )
  }
}










export default UserShow;
