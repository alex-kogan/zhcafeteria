import {connect} from 'react-redux';

import App from '../Components/App/App';

import {checkRemeberMe} from '../Actions/signInActions.js'
import {getUserSummary} from '../Actions/adminActions.js'
import {getUserStats} from '../Actions/statsActions.js'

const mapStateToProps = (state) => {
  return {
    appRoute: state.appRoute.appRoute,
    overlayStatus: state.priceMenu.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => dispatch(checkRemeberMe()),
    onAdminLoad: () => dispatch(getUserSummary()),
    onStatsLoad: () => dispatch(getUserStats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);