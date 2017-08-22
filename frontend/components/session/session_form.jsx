import  React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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
    debugger
    const formType = this.props.formType;
    const otherForm = (this.props.formType === 'login') ? '/signup' : '/login';

      return (
        <div>
          <p>{this.props.errors}</p>
          <form onSubmit={this.handleSubmit}>
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
              <button>Submit</button>
              <Link to={otherForm}><span>{otherForm.slice(1)}</span></Link>
          </form>
        </div>
    );
  }
}

export default SessionForm;
