import {appConstants} from '../Constants.js'

const initialStateUserData = {
	id: '',
	type: 'user',
	name: '',
	email: '',
	currentValue: 0,
	valueResetDate: ''
}

export const userData = (state=initialStateUserData, action={}) => {
	switch(action.type) {
		case appConstants.USER_DATA_UPDATE:
			return Object.assign({}, state, {
				id: action.payload.id,
				type: action.payload.type,
				name: action.payload.name,
				email: action.payload.email,
				currentValue: action.payload.currentValue,
				valueResetDate: action.payload.valueResetDate
			});
		default:
			return state;
	}
}