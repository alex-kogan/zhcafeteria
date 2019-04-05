import {appConstants} from '../Constants.js'

const initialRememberMeStatus = {
	status: false
}

export const rememberMeStatus = (state=initialRememberMeStatus, action={}) => {
	switch(action.type) {
		case appConstants.REMEMBER_ME:
			return Object.assign({}, state, {status: action.payload});
		default:
			return state;
	}
}