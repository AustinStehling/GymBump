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
        <div className="nav-container">
          <Link to='/'>
            <h1 className="gymbump-header">GYM BUMP</h1>
          </Link>
          <div className="signup-nav">
            <Link to='/signup'>
              <p className='sign-up'>Sign Up</p>
            </Link>
            <Link to='/login'>
              <p className='login'>Login</p>
            </Link>
          </div>
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
