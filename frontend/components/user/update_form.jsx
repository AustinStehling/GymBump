import React from 'react'
import { withRouter } from 'react-router'

class UpdateUser extends React.Component {
   constructor(props) {
      super(props);
      debugger
      this.state = {
        gender: this.props.member.gender,
        birthday: this.props.member.birthday,
        weight: this.props.member.weight,
        experience: this.props.member.experience,
        height_ft: this.props.member.height_ft,
        height_in: this.props.member.height_in,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
    }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    debugger
    this.props.editUser(this.props.member.id, user)
    this.props.toggleParent();
  }

  handleUpdate(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {

      return (
        <div className='div-main'>
          <div className='div-member-stats'>
              <form >
                <h3 className='sign-up-header'>Add Stats</h3>
                  <div className="birthday-div">
                    <input
                      type="number"
                      className="wt-ht"
                      value={this.state.weight}
                      placeholder="Weight"
                      onChange={this.handleUpdate('weight')}
                      />
                    <input
                      type="number"
                      className="wt-ht"
                      value={this.state.height_ft}
                      placeholder="Height ft"
                      onChange={this.handleUpdate('height_ft')}
                      />
                    <input
                      type="number"
                      className="wt-ht"
                      value={this.state.height_in}
                      placeholder="Height in"
                      onChange={this.handleUpdate('height_in')}
                      />
                  </div>
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
                  <div className="birthday-div">
                    <select className="g-selector" onChange={this.handleUpdate('gender')}>
                      <option>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <select className="e-selector" onChange={this.handleUpdate('experience')}>
                      <option>Experience</option>
                      <option value="Novice">Novice</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Veteran">Veteran</option>
                    </select>
                  </div>
                  <div className='home-button-div'>
                    <button className="sub-button-render" onClick={this.handleSubmit}>Update</button>
                  </div>
              </form>
          </div>
        </div>
      );
    }
}

export default withRouter(UpdateUser)
