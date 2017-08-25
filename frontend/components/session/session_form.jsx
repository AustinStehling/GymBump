import  React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
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

  handleUpdate(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {

    const formType = this.props.formType;
    const otherForm = (this.props.formType === 'login') ? '/signup' : '/login';
    const errors = this.props.errors

      if (formType === 'signup') {
        return (
          <div className="sing-up-form">
            <div className="sign">

              <form className="new-user">
                <h3 className='sign-up-header'>Sign Up</h3>
                  <input
                    type="text"
                    value={this.state.username}
                    placeholder="Username"
                    onChange={this.handleUpdate('username')}
                    />
                  <p className="errors">{errors[0]}</p>
                  <input
                    type="password"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.handleUpdate('password')}
                    />
                  <p className="errors">{errors[1]}</p>
                  <input
                    type="text"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={this.handleUpdate('email')}
                    />
                  <p className="errors">{errors[2]}</p>
                  <input
                    type="text"
                    value={this.state.firstName}
                    placeholder="First Name"
                    onChange={this.handleUpdate('first_name')}
                    />
                  <p className="errors">{errors[3]}</p>
                  <input
                    type="text"
                    value={this.state.LastName}
                    placeholder="Last Name"
                    onChange={this.handleUpdate('last_name')}
                    />
                  <p className="errors">{errors[4]}</p>
                  <select className="g-selector" onChange={this.handleUpdate('gender')}>
                    <option>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <p className="errors">{errors[5]}</p>
                <button className="sub-button" onClick={this.handleSubmit}>Submit</button>
              </form>
            </div>
          </div>
        );
      }

      return (
        <div className="sing-up-form">
          <div className="sign">

            <form className="new-user">
              <h3 className='login-header'>Login</h3>
                <input
                  type="text"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.handleUpdate('username')}
                  />
                <p className="errors">{errors[0]}</p>
                <input
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.handleUpdate('password')}
                  />
                <p className="errors">{errors[1]}</p>
                <button className="sub-button-two" onClick={this.handleSubmit}>Submit</button>
             </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;
