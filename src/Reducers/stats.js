import {appConstants} from '../Constants.js'

import {setChartSizes} from '../Actions/statsActions.js'

const initialStatsState = {
	minStartDate: undefined,
	maxEndDate: undefined,
	startDate: undefined,
	endDate: undefined,
	userData: [],
	userDiaplayData: [],
	chartSizes: setChartSizes(typeof window === 'object' ? window.innerWidth : null), 
	statsProccessing: true
}

export const statsPage = (state=initialStatsState, action={}) => {
	switch(action.type) {
		case appConstants.LOAD_STATS_DATA:
			return Object.assign({}, state, {
				userData: action.payload.data,
				minStartDate: action.payload.minStartDate,
				maxEndDate: action.payload.maxEndDate
			})
		case appConstants.SCREEN_RESIZE:
			return Object.assign({}, state, {chartSizes:action.payload});
		case appConstants.CHART_RENDER:
			return Object.assign({}, state, {chartData:action.payload});			
		case appConstants.UPDATE_STATS_DATA:
			return Object.assign({}, state, {userDiaplayData: action.payload});
		case appConstants.UPDATE_STATS_START_DATE:
			return Object.assign({}, state, {startDate: action.payload});
		case appConstants.UPDATE_STATS_END_DATE:
			return Object.assign({}, state, {endDate: action.payload});
		case appConstants.STATS_PROCESSING_START:
			return Object.assign({}, state, {statsProccessing: true});
		case appConstants.STATS_PROCESSING_DONE:
			return Object.assign({}, state, {statsProccessing: false});
		default:
			return state;
	}
}