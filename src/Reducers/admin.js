import {appConstants} from '../Constants.js'

const initialAdminState = {
	userDataList: [],
	displayDataList: [],
	adminProcessing: true
}

export const adminData = (state=initialAdminState, action={}) => {
	switch(action.type) {
		case appConstants.LOAD_ADMIN_USER_LIST:
			return Object.assign({}, state, {
				userDataList: action.payload
			});
		case appConstants.UPDATE_ADMIN_USER_LIST:
			return Object.assign({}, state, {
				displayDataList: action.payload,
			});
		case appConstants.ADMIN_PROCESSING_START:
			return Object.assign({}, state, {adminProcessing: true});
		case appConstants.ADMIN_PROCESSING_DONE:
			return Object.assign({}, state, {adminProcessing: false});
		default:
			return state;
	}
}