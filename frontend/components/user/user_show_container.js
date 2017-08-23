import UserShow from './user_show';
import { connect } from 'react-redux';
import { requestUser } from '../../actions/user/user_actions'

const mapStateToProps = state => ({
  member: state.entities.members.selected
});


const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow)
