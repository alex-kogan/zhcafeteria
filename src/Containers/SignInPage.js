import {connect} from 'react-redux';

import SignInPage from '../Components/SignInPage/SignInPage'
import {signIn, rememberMe} from '../Actions/signInActions.js'

const mapStateToProps = (state) => {
  return {
  	signInErrors: state.signInStatus.signInErrors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	onSignInClick: (signInData) => dispatch(signIn(signInData)),
  	onRememberMe: (event) => dispatch(rememberMe(event.target.checked))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);