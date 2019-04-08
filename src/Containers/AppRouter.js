import {connect} from 'react-redux';

import App from '../Components/App/App';

import {checkRemeberMe} from '../Actions/signInActions.js'
import {getUserSummary} from '../Actions/adminActions.js'

const mapStateToProps = (state) => {
  return {
    appRoute: state.appRoute.appRoute
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => dispatch(checkRemeberMe()),
    onAdminLoad: () => dispatch(getUserSummary())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);