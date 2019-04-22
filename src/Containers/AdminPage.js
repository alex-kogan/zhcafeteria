import {connect} from 'react-redux';

import AdminPage from '../Components/Admin/Admin';

import {getUserSummary} from '../Actions/adminActions.js'

const mapStateToProps = (state) => {
  return {
  	userDataList: state.adminData.displayDataList,
  	adminProcessing: state.adminData.adminProcessing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	loadUserList: () => dispatch(getUserSummary())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);