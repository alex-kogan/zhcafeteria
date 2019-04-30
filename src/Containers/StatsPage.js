import {connect} from 'react-redux';

import StatisticsPage from '../Components/StatisticsPage/StatisticsPage';

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    userChartData: state.statsPage.userDiaplayData,
    chartSizes: state.statsPage.chartSizes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage);