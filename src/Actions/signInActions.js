import {appConstants} from '../Constants.js';

import {routeChange} from './index.js'

const verifyEmail = (email) => {
	const numberAts = email.replace(/[^@]/g, "").length===1
			// chck for no more than one @
	const atBain = email.substring(email.length-9).toLowerCase()==='@bain.com'		
			// check for @bain.com
	const fullEamil = email.substring(0,email.length-9).toLowerCase().match(/[a-z]/gi) !== null

	return (fullEamil&atBain&numberAts)
}

const verifyPassword = (password) => {
	// check password length
	const passLength = (password.length<=16 && password.length>=8)
	// check capital letters
	const capitalLetters = password.match(/[A-Z]/gi) !== null
	// check regular letters
	const regularLetters = password.match(/[a-z]/g) !== null
	// check numbers
	const numbers = password.match(/[0-9]/gi) !== null
	return (passLength&capitalLetters&regularLetters&numbers)
}

const verifyRegisterData = (registerData) => {
	const {name ,password, email} = registerData
	let errorArray = []
	// Name verify
	if (name.trim().length === 0) {
		errorArray.push('User name must contain at least one non white space char')
	}
	// Bain email verify
	if (!verifyEmail(email)) {
		errorArray.push('You must enter a valid Bain email')
	}
	// password verify
	if (!verifyPassword(password)) {
		errorArray.push('Password must contain between 8 and 16 charcters, at least on capital letter, at least on regular letter and at least one number')
	}
	return errorArray
}

const verifySignInData = (signIn) => {
	const {password, email} = signIn
	let errorArray = []
	// Bain email verify
	if (!verifyEmail(email)) {
		errorArray.push('You must enter a valid Bain email')
	}
	// password verify
	if (!verifyPassword(password)) {
		errorArray.push('Password must contain between 8 and 16 charcters, at least on capital letter, at least on regular letter and at least one number')
	}
	return errorArray
}

export const signIn = (signInData) => (dispatch, getState) => {
	const errorArray = verifySignInData(signInData)
	if (errorArray.length===0) {
		// the input for sign in is correct, send to server
		fetch(appConstants.SERVER_ADDRESS+'signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: signInData.email,
				password: signInData.password
			})
		})
		.then(response => response.json())
		.then(userData => {
			if (userData.id) {
				if (getState().rememberMeStatus.status) {
					sessionStorage.setItem('userId',userData.id)
				}
				dispatch ({type: appConstants.SIGN_IN, payload: 'signed_in'});
				dispatch ({type: appConstants.USER_DATA_UPDATE, payload: userData});
				dispatch (routeChange('Home'));
			}
			else {
				const signInError = []
				signInError.push(userData)
				dispatch ({type: appConstants.SIGN_IN_ERROR, payload: signInError});
			}
		})
	}
	else {
		dispatch ({type: appConstants.SIGN_IN_ERROR, payload: errorArray});
	}
};

export const checkRemeberMe = () => (dispatch) => {
	const userId = sessionStorage.getItem('userId');
	if (userId) {
		fetch(appConstants.SERVER_ADDRESS+'profile/'+userId, {
			method: 'get',
			headers: {'Content-Type': 'application/json'},
		})
		.then(response => response.json())
		.then(userData => {
			dispatch ({type: appConstants.SIGN_IN, payload: 'signed_in'});
			dispatch ({type: appConstants.USER_DATA_UPDATE, payload: userData});
			dispatch (routeChange('Home'));
		})
	}
};

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
};

export const rememberMe = (rememberMeStatus) => {
	return ({type: appConstants.REMEMBER_ME, payload: rememberMeStatus});
};

export const signOut = () => (dispatch, getState) => {
	sessionStorage.clear();
	dispatch ({type: appConstants.SIGN_OUT, payload: 'signed_out'});
	dispatch (routeChange('Sign In'));
};