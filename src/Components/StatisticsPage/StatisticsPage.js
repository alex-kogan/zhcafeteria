import React from 'react';

import StatsControlPannel from '../../Containers/StatsControl'
import StatsBarChartArea from './StatsBarChartArea'

const niceDate = (dateValue) => {
  const date = new Date(dateValue)
  const day=date.getDate()
  const month=date.getMonth()+1
  const year=date.getFullYear()

  return [day,month,year].join('/')
  //const time=date.getHours()+':'+date.getMinutes()

  //return [day,month,year].join('/')+' '+time
}

const StatisitcsPage = ({userData, userChartData, chartSizes}) => {
  const {currentValue, valueResetDate} = userData
  const {height, totalBarWidth} = chartSizes
  return (
    <div>
      <p className="f3 lh-copy">
      Your cafeteria ammount is <b>{currentValue}</b> CHF since <b>{niceDate(valueResetDate)}</b>
      </p>
      <StatsControlPannel/>
      <div className="w-50-ns w-100">
        <StatsBarChartArea transactionData = {userChartData} width={totalBarWidth} height={height}/>
      </div>
      <div className="w-25-ns w-50">
      </div>
      <div className="w-25-ns w-50">
      </div>
    </div>
  )
}

export default StatisitcsPage;