import {appConstants} from '../Constants.js';

export const getUserSummary = () => (dispatch, getState) => {
		fetch(appConstants.SERVER_ADDRESS+'adminGetUsers/', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
	})
	.then(response => response.json())
	.then(userData => {
		if (userData.length!==0) {
			dispatch ({type: appConstants.LOAD_ADMIN_USER_LIST, payload: userData});
			dispatch ({type: appConstants.UPDATE_ADMIN_USER_LIST, payload: userData});
		}
	})
}

const filerUserList = (userDataList,searchString) => {
	let displayList = userDataList.filter ((userData) => {
		return userData.name.toLowerCase().indexOf(searchString)!==-1
	})
	return displayList
}

export const onSearchChange = (searchString) => (dispatch, getState) => {
	const displayList = filerUserList(getState().adminData.userDataList,searchString)
	dispatch ({type: appConstants.UPDATE_ADMIN_USER_LIST, payload: displayList})
}
