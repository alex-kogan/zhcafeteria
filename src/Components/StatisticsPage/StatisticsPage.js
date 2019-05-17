import React from 'react';

import 'react-vis/dist/style.css';

import StatsControlPannel from '../../Containers/StatsControl'
import StatsBarChartArea from './StatsBarChartArea'
import StatsBarsChartArea from './StatsBarsChartArea'

const niceDate = (dateValue) => {
  const date = new Date(dateValue)
  const day=date.getDate()
  const month=date.getMonth()+1
  const year=date.getFullYear()

  return [day,month,year].join('/')
  //const time=date.getHours()+':'+date.getMinutes()

  //return [day,month,year].join('/')+' '+time
}

const statsChartsArea = (userChartData, chartSizes) => {
  const {height, totalBarWidth, dayBarWidth} = chartSizes
  if (userChartData.length === 0)
    return <div>
      <p> Loading your charts or no data availble for charts</p>
    </div>
  else
    return <div>
      <StatsControlPannel/>
      <div className='flex flex-wrap'>
        <div className="w-50-ns w-90">
          <StatsBarChartArea data = {userChartData} width={totalBarWidth} height={height}/>
        </div>
        <div className="w-50-ns w-90">
          <StatsBarsChartArea data = {userChartData} width={dayBarWidth} height={height}/>
        </div>
      </div>
    </div>
}

const StatisitcsPage = ({userData, userChartData, chartSizes}) => {
  const {currentValue, valueResetDate} = userData
  return (
    <div>
      <p className="f3 lh-copy">
      Your cafeteria ammount is <b>{currentValue}</b> CHF since <b>{niceDate(valueResetDate)}</b>
      </p>
      {statsChartsArea(userChartData, chartSizes)}
    </div>
  )
}

export default StatisitcsPage;