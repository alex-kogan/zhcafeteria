import {connect} from 'react-redux';

import Navigation from '../Components/Navigation/Navigation';
import {signOut} from '../Actions'

const mapStateToProps = (state) => {
  return {
  	appRoute: state.appRoute.appRoute,
  	userData: state.userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	onSignOutClick: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);