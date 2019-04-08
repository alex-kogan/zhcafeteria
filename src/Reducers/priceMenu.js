import {appConstants} from '../Constants.js'

const initialStatePrice = {
	value: 0,
	message: false
}

export const priceMenu = (state=initialStatePrice, action={}) => {
	switch(action.type) {
		case appConstants.PRICE_INCREASE:
			return Object.assign({}, state, {value: action.payload});
		case appConstants.PRICE_DECREASE:
			return Object.assign({}, state, {value: action.payload});
		case appConstants.PRICE_RESET:
			return Object.assign({}, state, {value: action.payload});
		case appConstants.PRICE_SUBMIT:
			return Object.assign({}, state, {
				value: 0,
				message: true
			});
		case appConstants.PRICE_SUBMIT_DONE:
			return Object.assign({}, state, {message: false});
		default:
			return state;
	}
}