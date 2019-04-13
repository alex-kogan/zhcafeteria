import {appConstants} from '../Constants.js'

const initialAdminState = {
	userDataList: [],
	displayDataList: [],
}

export const adminData = (state=initialAdminState, action={}) => {
	switch(action.type) {
		case appConstants.LOAD_ADMIN_USER_LIST:
			return Object.assign({}, state, {userDataList: action.payload});
		case appConstants.UPDATE_ADMIN_USER_LIST:
			return Object.assign({}, state, {displayDataList: action.payload});
		default:
			return state;
	}
}