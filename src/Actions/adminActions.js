import {appConstants} from '../Constants.js';

export const getUserSummary = () => (dispatch, getState) => {
	fetch(appConstants.SERVER_ADDRESS+'admin', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			action: 'getUsers'
		})
	})
	.then(response => response.json())
	.then(userData => {
		if (userData.length!==0) {
			dispatch ({type: appConstants.LOAD_ADMIN_USER_LIST, payload: userData});
			const {userDataList, userSearchString} = getState().adminData
			const updatePayload = {data: userDataList, searchString: userSearchString}
			dispatch ({type: appConstants.UPDATE_ADMIN_USER_LIST, payload: updatePayload});
		}
		dispatch ({type: appConstants.ADMIN_PROCESSING_DONE})
	})
}

const filerUserList = (userDataList,searchString) => {
	let displayList = userDataList.filter ((userData) => {
		return userData.fullName.toLowerCase().indexOf(searchString)!==-1
	})
	return displayList
}

export const onSearchChange = (searchString) => (dispatch, getState) => {
	const displayList = filerUserList(getState().adminData.userDataList,searchString)
	const updatePayload = {data: displayList, searchString: searchString}
	dispatch ({type: appConstants.UPDATE_ADMIN_USER_LIST, payload: updatePayload})
	dispatch ({type: appConstants.ADMIN_PROCESSING_DONE})
}

export const onResetClick = () => (dispatch, getState) => {
	dispatch ({type: appConstants.ADMIN_PROCESSING_START})
	dispatch ({type: appConstants.ADMIN_RESET_CURRENT_VALUES})
	const usersToReset = getState().adminData.displayDataList
	fetch(appConstants.SERVER_ADDRESS+'admin/', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			action: 'resetValues',
			usersToReset: usersToReset
		})
	})
	.then(response => response.json())
	.then(userData => {
		if (userData.length!==0) {
			dispatch ({type: appConstants.LOAD_ADMIN_USER_LIST, payload: userData});
			const {userDataList, userSearchString} = getState().adminData
			const displayList = filerUserList(userDataList, userSearchString)
			const updatePayload = {data: displayList, searchString: userSearchString}
			dispatch ({type: appConstants.UPDATE_ADMIN_USER_LIST, payload: updatePayload})
			dispatch ({type: appConstants.ADMIN_PROCESSING_DONE})
		}
	})
}