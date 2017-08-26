import { connect } from 'react-redux';
import CreateSetResult from './create_setresult';
import { createSet } from '../../actions/setresult/setresult_actions'

const mapDispatchToProps = dispatch => ({
  createSet: setresult => dispatch(createSet(setresult))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateSetResult)
