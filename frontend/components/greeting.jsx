import React from 'react'
import { Link } from 'react-router-dom'

class Greeting extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveCurrentUser(null)
  }

  render() {
    const user = this.props.currentUser;

    if(user === null) {
      return (
        <div>
          <Link to='/login'>
            Sign Up
          </Link>
          <Link to='./signup'>
            Login
          </Link>
        </div>
      );
    }

    return (
      <div>
        <h3>{user.username}</h3>
        <button onClick={this.handleSubmit}>Logout</button>
      </div>
    );

  }
}


export default Greeting;
