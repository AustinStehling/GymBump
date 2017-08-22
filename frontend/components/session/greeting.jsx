import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const user = this.props.currentUser;

    if(user === null) {
      return (
        <div>
          <Link to='/signup'>
            Sign Up
          </Link>
          <br></br>
          <Link to='/login'>
            Login
          </Link>
        </div>
      );
    }

    return (
      <div>
        <p>Welcome {user.username}</p>
        <button onClick={this.handleSubmit}>
          Logout
        </button>
      </div>
    );


  }
}

export default Greeting;
