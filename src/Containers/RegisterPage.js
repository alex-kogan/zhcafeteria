import {connect} from 'react-redux';

import RegisterPage from '../Components/RegisterPage/RegisterPage';
import {register} from '../Actions'

const mapStateToProps = (state) => {
  return {
  	signInErrors: state.signInStatus.signInErrors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	onRegisterClick: (registerData) => dispatch(register(registerData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);