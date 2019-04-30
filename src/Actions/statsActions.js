import {appConstants} from '../Constants.js';

const smallScreen = 480
const height = 400

const setTotalChartSize = (screenWidth) => {
	if (screenWidth>smallScreen)
		return screenWidth/2
	else
		return screenWidth
}

const setBarChartSize = (screenWidth) => {
	if (screenWidth>smallScreen)
		return screenWidth/4
	else
		return screenWidth/2
}

export const setChartSizes = (screenWidth) => {
	const chartSizes = {
		height: height,
		totalBarWidth: setTotalChartSize(screenWidth),
		dayBarWidth: setBarChartSize(screenWidth),
		timeBarWidth: setBarChartSize(screenWidth)
	}
	return chartSizes
}

const sortByDate = (a,b) => {
  if(a.transactionDate < b.transactionDate) { return -1; }
  if(a.transactionDate > b.transactionDate) { return 1; }
  return 0;
}

export const getUserStats = () => (dispatch, getState) => {
	const userId = getState().userData._id
	fetch(appConstants.SERVER_ADDRESS+'stats/'+userId, {
		method: 'get',
		headers: {'Content-Type': 'application/json'},
	})
	.then(response => response.json())
	.then(userStats => {
		if (userStats.length!==0) {
			const sortedUserStats = userStats.sort((a,b) => sortByDate(a,b))
			const statsData = {
				data: sortedUserStats,
				minStartDate: Date.parse(sortedUserStats[0].transactionDate),
				maxEndDate: Date.now()
			}
			dispatch ({type: appConstants.LOAD_STATS_DATA, payload: statsData});
			// run chart data function
			dispatch ({type: appConstants.UPDATE_STATS_DATA, payload: sortedUserStats});
			dispatch ({type: appConstants.UPDATE_STATS_START_DATE, payload: getState().statsPage.minStartDate});
			dispatch ({type: appConstants.UPDATE_STATS_END_DATE, payload: getState().statsPage.maxEndDate});
		}
		dispatch ({type: appConstants.STATS_PROCESSING_DONE})
	})
}

export const onStartDateCahnge = (selectedDate) => (dispatch, getState) => {
	dispatch ({type: appConstants.UPDATE_STATS_START_DATE, payload: selectedDate});
}

export const onEndDateCahnge = (selectedDate) => (dispatch, getState) => {
	dispatch ({type: appConstants.UPDATE_STATS_END_DATE, payload: selectedDate});
}