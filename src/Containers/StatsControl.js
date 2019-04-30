import {connect} from 'react-redux';

import StatsControlPannel from '../Components/StatisticsPage/StatsControlPannel';

import {onStartDateCahnge, onEndDateCahnge} from '../Actions/statsActions.js'

const mapStateToProps = (state) => {
  return {
  	minStartDate: state.statsPage.minStartDate,
  	maxEndDate: state.statsPage.maxEndDate,
  	startDate: state.statsPage.startDate,
  	endDate: state.statsPage.endDate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	onStartDateCahnge: (dateSelected) => dispatch(onStartDateCahnge(dateSelected)),
  	onEndDateCahnge: (dateSelected) => dispatch(onEndDateCahnge(dateSelected))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatsControlPannel);