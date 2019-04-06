import {connect} from 'react-redux';

import App from '../Components/App/App';

import {routeChange} from '../Actions'
import {checkRemeberMe} from '../Actions/signInActions.js'

const mapStateToProps = (state) => {
  return {
    appRoute: state.appRoute.appRoute
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLinkClick: (destination) => dispatch(routeChange(destination)),
    onLoad: () => dispatch(checkRemeberMe())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);