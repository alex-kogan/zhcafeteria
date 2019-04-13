import {connect} from 'react-redux';

import AdminControls from '../Components/Admin/AdminControls';

import {onSearchChange} from '../Actions/adminActions.js'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	onSearchChange: (event) => dispatch(onSearchChange(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminControls);