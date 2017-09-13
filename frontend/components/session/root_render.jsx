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
      gender: "",
      birthday: "",
      weight: "",
      experience: "",
      height_ft: "",
      height_in: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user)
      .then(
        () => {
          this.props.history.push('/');
        }
      );
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.login({username: 'Demo', password: 'password'});
  }

  handleUpdate(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {

    let errors = this.props.errors.map((error, idx) => <li className="errors-mapped" key={idx}>{error}</li>)

    return (
      <div className="render-div">
        <div className="render-div-2">
          <img className="bg-img" src={window.staticImages.crossfitBackground} />
            <form className="new-user-home">
              <h3 className='sign-up-header'>Sign Up</h3>
                <input
                  type="text"
                  value={this.state.username}
                  placeholder="Username*"
                  onChange={this.handleUpdate('username')}
                  />
                <input
                  type="password"
                  value={this.state.password}
                  placeholder="Password*"
                  onChange={this.handleUpdate('password')}
                  />

                <input
                  type="text"
                  value={this.state.email}
                  placeholder="Email*"
                  onChange={this.handleUpdate('email')}
                  />
                <input
                  type="text"
                  value={this.state.firstName}
                  placeholder="First Name*"
                  onChange={this.handleUpdate('first_name')}
                  />
               <input
                  type="text"
                  value={this.state.lastName}
                  placeholder="Last Name*"
                  onChange={this.handleUpdate('last_name')}
                  />
                <div className="birthday-div">
                  <p className="dob">DOB:</p>
                  <input
                    type="date"
                    className="birthday"
                    value={this.state.birthday}
                    placeholder="Birthday"
                    onChange={this.handleUpdate('birthday')}
                    />
                </div>
                <ol className="errors-list">
                  {errors}
                </ol>
                <div className='home-button-div'>
                  <button className="sub-button-render" onClick={this.handleSubmit}>Sign Up</button>
                  <button className="demo-button" onClick={this.handleDemoLogin}>Demo Login</button>
                </div>
            </form>
        </div>
      </div>
    );
  }
}


export default RootRender;
