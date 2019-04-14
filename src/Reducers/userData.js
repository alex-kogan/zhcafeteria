import {appConstants} from '../Constants.js'

const initialStateUserData = {
	id: '',
	admin: false,
	firstName: '',
	email: '',
	currentValue: 0,
	valueResetDate: ''
}

export const userData = (state=initialStateUserData, action={}) => {
	switch(action.type) {
		case appConstants.USER_DATA_UPDATE:
			return Object.assign({}, state, {
				id: action.payload.id,
				admin: action.payload.admin,
				firstName: action.payload.firstName,
				email: action.payload.email,
				currentValue: action.payload.currentValue,
				valueResetDate: action.payload.valueResetDate
			});
		default:
			return state;
	}
}