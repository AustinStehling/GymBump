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
    this.props.login(user)
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

    const errors = this.props.errors

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
                <input
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.handleUpdate('password')}
                  />
                <p className="errors">{errors[0]}</p>
                <button className="sub-button-two" onClick={this.handleSubmit}>Submit</button>
             </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;
