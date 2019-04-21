import {appConstants} from '../Constants.js';

// const serverAddress =  'https://sleepy-falls-75821.herokuapp.com/';

export const routeChange = (destination) => (dispatch, getState) => {
	if ((destination==='Sign In'||destination==='Register') && (getState().signInStatus.signInErrors.length>0)) {
		dispatch ({type: appConstants.SIGN_IN_ERROR_RESET})
	}
	dispatch ({type: appConstants.ROUTE_CHANGE, payload: destination});
};

const roundedNumber = (number) => {
	return Math.round(number * 100) / 100	
}

export const priceIncrease = (value) => (dispatch, getState) => {
	dispatch ({type: appConstants.PRICE_INCREASE, payload: roundedNumber(getState().priceMenu.value + value)});
};

export const priceDecrease = (value) => (dispatch, getState) => {
	dispatch ({type: appConstants.PRICE_DECREASE, payload: roundedNumber(getState().priceMenu.value - value)<0 ? getState().priceMenu.value : roundedNumber(getState().priceMenu.value - value)});
};

export const priceSubmit = (value) => (dispatch, getState) => {
	const {value} = getState().priceMenu
	const userId = getState().userData._id
	if (value!==0) {
		dispatch ({type: appConstants.PRICE_SUBMIT, payload: value});
		fetch(appConstants.SERVER_ADDRESS+'transaction/'+userId, {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				amount: value
			})
		})
		.then(response => response.json())
		.then(userData => {
			dispatch ({type: appConstants.USER_DATA_UPDATE, payload: userData});
			setTimeout(()=>dispatch ({type: appConstants.PRICE_SUBMIT_DONE}), 500);
		})
	}
};

export const priceReset = (value) => (dispatch, getState) => {
	if (getState().priceMenu.value!==0){
		dispatch ({type: appConstants.PRICE_RESET, payload: 0});
	}
};