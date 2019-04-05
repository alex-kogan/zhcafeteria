import {appConstants} from '../Constants.js';
import {verifyRegisterData, verifySignInData} from './signInActions.js'

export const routeChange = (destination) => (dispatch, getState) => {
	if ((destination==='Sign In'||destination==='Register') && (getState().signInStatus.signInErrors.length>0)) {
		dispatch ({type: appConstants.SIGN_IN_ERROR_RESET})
	}
	dispatch ({type: appConstants.ROUTE_CHANGE, payload: destination});
};

const roundedNumber = (number) => {
	return Math.round(number * 100) / 100	
}

export const priceIncrease = (value) => (dispatch, getState) => {
	dispatch ({type: appConstants.PRICE_INCREASE, payload: roundedNumber(getState().priceMenu.value + value)});
};

export const priceDecrease = (value) => (dispatch, getState) => {
	dispatch ({type: appConstants.PRICE_DECREASE, payload: roundedNumber(getState().priceMenu.value - value)});
};

export const priceSubmit = (value) => (dispatch, getState) => {
	dispatch ({type: appConstants.PRICE_SUBMIT, payload: getState().priceMenu.value});
};

export const priceReset = (value) => (dispatch, getState) => {
	dispatch ({type: appConstants.PRICE_RESET, payload: 0});
};

export const signIn = (signInData) => (dispatch, getState) => {

	const errorArray = verifySignInData(signInData)
	if (errorArray.length===0) {
		// the input for sign in is correct, send to server

		// the reply from the server for registering is goood, proceed with process
		dispatch ({type: appConstants.SIGN_IN, payload: 'signed_in'});
		dispatch ({type: appConstants.USER_DATA_UPDATE, payload: signInData});
		dispatch (routeChange('Home'));
	}
	else {
		dispatch ({type: appConstants.SIGN_IN_ERROR, payload: errorArray});
	}
}



export const register = (registerData) => (dispatch, getState) => {
	const errorArray = verifyRegisterData(registerData)
	if (errorArray.length===0) {
		// the input for register is correct, send to server

		// the reply from the server for registering is goood, proceed with process
		dispatch ({type: appConstants.REGISTER, payload: 'signed_in'});
		dispatch ({type: appConstants.USER_DATA_UPDATE, payload: registerData});
		dispatch (routeChange('Home'));
	}
	else {
		dispatch ({type: appConstants.SIGN_IN_ERROR, payload: errorArray});
	}
}

export const rememberMe = (rememberMeStatus) => {
	return ({type: appConstants.REMEMBER_ME, payload: rememberMeStatus});
}

export const signOut = () => (dispatch, getState) => {
	dispatch ({type: appConstants.SIGN_OUT, payload: 'signed_out'});
	dispatch (routeChange('Sign In'));
};