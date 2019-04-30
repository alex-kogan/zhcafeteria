import {appConstants} from '../Constants.js'

const initialStateRoute = {
	appRoute: 'Sign In'
}

export const appRoute = (state=initialStateRoute, action={}) => {
	switch(action.type) {
		case appConstants.ROUTE_CHANGE:
			return Object.assign({}, state, {appRoute: action.payload});	
		default:
			return state;
	}
}

