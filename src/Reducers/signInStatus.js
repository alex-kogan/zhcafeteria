import {appConstants} from '../Constants.js'

const initialStateSignInStatus = {
	status: 'signed_out',
	signInErrors: []
}

export const signInStatus = (state=initialStateSignInStatus, action={}) => {
	switch(action.type) {
		case appConstants.SIGN_IN:
			return Object.assign({}, state, {status: action.payload});
		case appConstants.REGISTER:
			return Object.assign({}, state, {status: action.payload});
		case appConstants.SIGN_IN_ERROR:
			return Object.assign({}, state, {signInErrors: action.payload});
		case appConstants.SIGN_IN_ERROR_RESET:
			return Object.assign({}, state, {signInErrors: []});			
		case appConstants.SIGN_OUT:
			return Object.assign({}, state, {status: action.payload});
		default:
			return state;
	}
}