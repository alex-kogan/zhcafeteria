import {appConstants} from '../Constants.js'

const initialAdminState = {
	userDataList: [],
	userSearchString: '',
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
				userSearchString: action.payload.searchString,
				displayDataList: action.payload.data
			});
		case appConstants.ADMIN_PROCESSING_START:
			return Object.assign({}, state, {adminProcessing: true});
		case appConstants.ADMIN_PROCESSING_DONE:
			return Object.assign({}, state, {adminProcessing: false});
		default:
			return state;
	}
}