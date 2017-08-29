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
        <div className='div-update'>
          <div className='div-member-stats'>
            <h3 className='add-stats-h'>Add Stats</h3>
            <form className='up-form'>
                <div className='div-up-form'>
                  <h3>Weight:</h3>
                  <input
                    type="number"
                    className='update-input'
                    value={this.state.weight}
                    placeholder="Weight"
                    onChange={this.handleUpdate('weight')}
                    />
                 </div>
                 <div className='div-up-form'>
                   <h3>Height:</h3>
                   <div>
                     <input
                       type="number"
                       className='update-ht'
                       value={this.state.height_ft}
                       placeholder="Height ft"
                       onChange={this.handleUpdate('height_ft')}
                       />
                     <input
                       type="number"
                       className='update-ht'
                       value={this.state.height_in}
                       placeholder="Height in"
                       onChange={this.handleUpdate('height_in')}
                       />
                   </div>
                 </div>
                 <div className='div-up-form'>
                   <h3>Gender:</h3>
                     <select className='update-sel' onChange={this.handleUpdate('gender')}>
                       <option>Gender</option>
                       <option value="Male">Male</option>
                       <option value="Female">Female</option>
                     </select>
                 </div>
                 <div className='div-up-form'>
                   <h3>Experience:</h3>
                     <select className='update-sel' onChange={this.handleUpdate('experience')}>
                       <option>Experience</option>
                       <option value="Novice">Novice</option>
                       <option value="Intermediate">Intermediate</option>
                       <option value="Veteran">Veteran</option>
                     </select>
                 </div>
                 <div className='div-up-form'>
                   <h3>Upload Avatar:</h3>
                     <input
                       className='update-av'
                       onChange={this.upDateFile}
                       type="file"/>
                 </div>
              </form>
              <div className='div-up-button'>
                <button className='update-stat-button'
                  onClick={this.handleSubmit}>Update</button>
              </div>
          </div>
        </div>
      );
    }
}

export default withRouter(UpdateUser)
