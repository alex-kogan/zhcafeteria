import {appConstants} from '../Constants.js'

const initialStatePrice = {
	value: 0
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
			return Object.assign({}, state, {value: 0});			
		default:
			return state;
	}
}