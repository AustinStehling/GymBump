import React from 'react'
import { withRouter } from 'react-router'

class UpdateUser extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
        gender: this.props.member.gender || "",
        weight: this.props.member.weight || "",
        experience: this.props.member.experience || "",
        height_ft: this.props.member.height_ft || "",
        height_in: this.props.member.height_in || "",
        avatarFile: this.props.member.avatar || ""
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
      this.upDateFile = this.upDateFile.bind(this);
    }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData()
    formData.append("user[gender]", this.state.gender);
    formData.append("user[weight]", this.state.weight);
    formData.append("user[experience]", this.state.experience);
    formData.append("user[height_ft]", this.state.height_ft);
    formData.append("user[height_in]", this.state.height_in);
    formData.append("user[avatar]", this.state.avatarFile);
 debugger
    const user = Object.assign({}, this.state);
    this.props.editUser(this.props.member.id, formData)
    this.props.toggleParent();
  }

  upDateFile(e) {
    let file = e.currentTarget.files[0];
    this.setState({ avatarFile: file });
  }

  handleUpdate(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {

      return (
        <div className='div-main'>
          <div className='div-member-stats'>
              <form >
                <h3 >Add Stats</h3>
                <input onChange={this.upDateFile} type="file"/>
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
                  <div >
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
                  <div >
                    <button onClick={this.handleSubmit}>Update</button>
                  </div>
              </form>
          </div>
        </div>
      );
    }
}

export default withRouter(UpdateUser)
