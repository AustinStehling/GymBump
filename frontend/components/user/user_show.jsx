import React from 'react'
import { Route } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestUser(this.props.user)
  }

  render () {
    debugger
    return (
      <div>
        <h1>{user.first_name}</h1>
      </div>
    )
  }
}

export default UserShow;
