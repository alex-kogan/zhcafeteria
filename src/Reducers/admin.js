import {appConstants} from '../Constants.js'

const initialAdminState = {
	userDataList: [],
	searchFiecd: ''
}

export const adminData = (state=initialAdminState, action={}) => {
	switch(action.type) {
		case appConstants.ADMIN_USER_LIST:
			return Object.assign({}, state, {userDataList: action.payload});			
		default:
			return state;
	}
}