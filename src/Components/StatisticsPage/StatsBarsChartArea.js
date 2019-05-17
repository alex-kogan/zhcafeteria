import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  DiscreteColorLegend,
  ChartLabel
} from 'react-vis';

// build diffrent series per day then carete the bar series


const getTimeOfTransaction = (transactionsData) => {
	const hour = transactionsData.substring(0,2)
	if (hour >= 8 && hour < 12)
		return 0
	if (hour >= 12 && hour < 18)
		return 1
	if (hour >= 18 && hour <= 23)
		return 2
	return 3
}

const prepareStatsBarSeries = (data) => {
	const BarSeries = VerticalBarSeries;
	let i
	const colors = ['#333333', '#555555', '#777777', '#999999', '#AAAAAA', '#CCCCCC', '#EEEEEE']
	const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
	const timeNames = ['Morning','Lunch','Evening', 'Night']

	let bucketSize = dayNames.length

	const numberOfTransactionsDay = []

	for (i=0; i<bucketSize; i++) {
		numberOfTransactionsDay.push(0)
	}

	for (i=0; i<data.length; i++) {
		if (data[i].transactionAmount > 0) {
			numberOfTransactionsDay[new Date(data[i].transactionDate).getDay()]++
		}
	}
	
	const totalTransactionNumber = numberOfTransactionsDay.reduce ((total, num) => {
		return total+num
	})

	const dayBar = []
	const dayLegend = []
	for (i=0; i<bucketSize; i++) {
		dayBar.push(<BarSeries data={[{x: '', y: numberOfTransactionsDay[i]/totalTransactionNumber*100}]} 
			key={i}
			color = {colors[i]} 
			/>)
		if (numberOfTransactionsDay[i]>0) {
			dayLegend.push({title: dayNames[i], color:colors[i], strokeWidth: 10})
		}
	}

	bucketSize = timeNames.length

	const numberOfTransactionsTime = []

	for (i=0; i<bucketSize; i++) {
		numberOfTransactionsTime.push(0)
	}

	for (i=0; i<data.length; i++) {
		if (data[i].transactionAmount > 0) {
			//
			numberOfTransactionsTime[getTimeOfTransaction(data[i].transactionTime)]++
		}
	}
	
	const timeBar = []
	const timeLegend = []
	for (i=0; i<bucketSize; i++) {
		timeBar.push(<BarSeries data={[{x: '', y: numberOfTransactionsDay[i]/totalTransactionNumber*100}]} 
			key={i}
			color = {colors[i]} 
			/>)
		if (numberOfTransactionsDay[i]>0) {
			timeLegend.push({title: timeNames[i], color:colors[i], strokeWidth: 10})
		}
	}

	return {dayData:dayBar, dayLegend:dayLegend, timeData:timeBar, timeLegend:timeLegend}
}

const StatsBarsChartArea = ({data, width, height}) => {
  const margins = { left: 100, right: 100, top: 40}
  if (width<400) {
  	margins.left=40
  	margins.right=40
  }
  const bars = prepareStatsBarSeries(data)
  return <div className='flex'>
  				<div>
						<XYPlot width={width} height={height} margin={margins} stackBy='y' xType='ordinal'>
							<VerticalGridLines />
							<HorizontalGridLines />
							<XAxis
								position = {'middle'}
								tickPadding = {5}
							/>
							<YAxis/>
							{bars.dayData}
							<ChartLabel
						    text="Sahre of transactions by day"
						    className="alt-y-label"
						    includeMargin={false}
						    xPercent={0.5}
						    yPercent={0.06}
						    style={{
						      textAnchor: 'middle'
						    }}
					    />
						</XYPlot>
						<DiscreteColorLegend
	            orientation="horizontal"
	            width={width}
							items={bars.dayLegend}
						/>
				  </div>
				  <div>
						<XYPlot width={width} height={height} margin={margins} stackBy='y' xType='ordinal'>
							<VerticalGridLines />
							<HorizontalGridLines />
							<XAxis
								position = {'middle'}
								tickPadding = {5}
							/>
							<YAxis/>
							{bars.timeData}
							<ChartLabel
						    text="Sahre of transactions by time of day"
						    className="alt-y-label"
						    includeMargin={false}
						    xPercent={0.5}
						    yPercent={0.06}
						    style={{
						      textAnchor: 'middle'
						    }}
					    />
						</XYPlot>
						<DiscreteColorLegend
	            orientation="horizontal"
	            width={width}
							items={bars.timeLegend}
						/>
				  </div>
			  </div>
}

export default StatsBarsChartArea
