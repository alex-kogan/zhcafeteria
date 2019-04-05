import {connect} from 'react-redux';

import NavigationLink from '../Components/Navigation/NavigationLink';

import {routeChange} from '../Actions'

const mapStateToProps = (state) => {
  return {
    appRoute: state.appRoute.appRoute
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLinkClick: (destination) => dispatch(routeChange(destination))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLink);