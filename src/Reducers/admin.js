import {appConstants} from '../Constants.js'

const initialAdminState = {
	userDataList: [],
	displayDataList: [],
	adminProcessing: false
}

export const adminData = (state=initialAdminState, action={}) => {
	switch(action.type) {
		case appConstants.LOAD_ADMIN_USER_LIST:
			return Object.assign({}, state, {
				userDataList: action.payload,
				adminProcessing: true
			});
		case appConstants.UPDATE_ADMIN_USER_LIST:
			return Object.assign({}, state, {
				displayDataList: action.payload,
				adminProcessing: true
			});
		case appConstants.ADMIN_PROCESSING_DONE:
		return Object.assign({}, state, {adminProcessing: false});
		default:
			return state;
	}
}