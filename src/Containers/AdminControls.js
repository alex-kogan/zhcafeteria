import {connect} from 'react-redux';

import AdminControls from '../Components/Admin/AdminControls';

import {onSearchChange, onResetClick} from '../Actions/adminActions.js'

const mapStateToProps = (state) => {
  return {
  	adminProcessing: state.adminData.adminProcessing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	onSearchChange: (event) => dispatch(onSearchChange(event.target.value)),
  	onResetClick: () => dispatch(onResetClick())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminControls);