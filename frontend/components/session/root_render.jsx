import React from 'react';
import { Route, Redirect } from 'react-router';
import { withRouter } from 'react-router';
import SessionFormContainer from './session_form_container';

class RootRender extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      gender: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.form(user)
      .then(
        () => {
          this.props.history.push('/');
        }
      );
  }

  handleDemoLogin() {
    this.props.login({username: 'Demo', password: 'password'});
  }

  handleUpdate(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    return (
      <div className="render-div">
        <div className="render-div-2">
          <img className="bg-img" src={window.staticImages.crossfitBackground} />
            <form className="new-user-home">
              <h3 className='sign-up-header'>Sign Up</h3>
                <input
                  type="text"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.handleUpdate('username')}
                  />
                <input
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.handleUpdate('password')}
                  />
                <input
                  type="text"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={this.handleUpdate('email')}
                  />
                <input
                  type="text"
                  value={this.state.firstName}
                  placeholder="First Name"
                  onChange={this.handleUpdate('first_name')}
                  />
                <input
                  type="text"
                  value={this.state.LastName}
                  placeholder="Last Name"
                  onChange={this.handleUpdate('last_name')}
                  />
                <select className="g-selector" onChange={this.handleUpdate('gender')}>
                  <option>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <div className='home-button-div'>
                  <button className="sub-button-render" onClick={this.handleSubmit}>Submit</button>
                  <button className="demo-button" onClick={this.handleDemoLogin}>Demo Login</button>
                </div>
            </form>
        </div>
      </div>
    );
  }
}


export default RootRender;
