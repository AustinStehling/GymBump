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

      if (formType === 'signup') {
        return (
          <div>
            <p>{this.props.errors}</p>
            <form >
              <h3>{formType}</h3>
                <input
                  type="text"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.handleUpdate('username')}
                  />
                <br></br>
                <input
                  type="password"
                  value={this.state.password}
                  placeholder="password"
                  onChange={this.handleUpdate('password')}
                  />
                <br></br>
                <input
                  type="text"
                  value={this.state.email}
                  placeholder="email"
                  onChange={this.handleUpdate('email')}
                  />
                <br></br>
                <input
                  type="text"
                  value={this.state.firstName}
                  placeholder="First Name"
                  onChange={this.handleUpdate('first_name')}
                  />
                <br></br>
                <input
                  type="text"
                  value={this.state.LastName}
                  placeholder="Last Name"
                  onChange={this.handleUpdate('last_name')}
                  />
                <br></br>
                <select onChange={this.handleUpdate('gender')}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <br></br>
              <button onClick={this.handleSubmit}>Submit</button>
              <Link to={otherForm}><span>{otherForm.slice(1)}</span></Link>
            </form>
          </div>
        );
      }

      return (
        <div>
          <p>{this.props.errors}</p>
          <form >
            <h3>{formType}</h3>
              <input
                type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.handleUpdate('username')}
                />
              <br></br>
              <input
                type="password"
                value={this.state.password}
                placeholder="password"
                onChange={this.handleUpdate('password')}
                />
              <br></br>
              <button onClick={this.handleSubmit}>Submit</button>
              <Link to={otherForm}><span>{otherForm.slice(1)}</span></Link>
          </form>
        </div>
    );
  }
}

export default SessionForm;
