import {appConstants} from '../Constants.js';

export const getUserSummary = (searchString='') => (dispatch, getState) => {
		fetch(appConstants.SERVER_ADDRESS+'adminGetUsers/', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			searchString: searchString
		})
	})
	.then(response => response.json())
	.then(userData => {
		if (userData.length!==0) {
			dispatch ({type: appConstants.ADMIN_USER_LIST, payload: userData});		
		}
	})
}