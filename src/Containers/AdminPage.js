import {connect} from 'react-redux';

import AdminPage from '../Components/Admin/Admin';

import {getUserSummary} from '../Actions/adminActions.js'

const mapStateToProps = (state) => {
  return {
  	userDataList: state.adminData.userDataList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	loadUserList: (searchString) => dispatch(getUserSummary(searchString))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);