import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LineSeries,
  ChartLabel
} from 'react-vis';

// build diffrent series per day then carete the bar series

const addZero = (number) => {
	return number < 10 ? ('0' + number.toString()): number.toString()
}

const niceDateFormat = (date) => {
	return date.getFullYear()+'-'+addZero(date.getMonth()+1)+'-'+addZero(date.getDate())
}

const CreatePoint = (transactionData) => {
		return {
		x: transactionData.transactionDate,
		y: transactionData.transactionAmount
	}
}

const addZeroDays = (data) => {
	let i=0
	let j=0
	const zeroDaysLimiit=7
	const zeroDateArray = []
	let firstDay, lastDay, dayDiff
	zeroDateArray.push(data[0])
	for (i=1; i<data.length; i++) {
		firstDay = new Date(data[i-1].x).getTime()
		lastDay = new Date(data[i].x).getTime()
		dayDiff = Math.round((lastDay-firstDay)/(24*60*60*1000))+1
		if (dayDiff>zeroDaysLimiit) {
			for (j=1; j<Math.floor(dayDiff/zeroDaysLimiit)+1; j++) {
				zeroDateArray.push({x: niceDateFormat(new Date(firstDay+j*zeroDaysLimiit*(24*60*60*1000))),y:0})
			}
		}
		zeroDateArray.push(data[i])
	}
	return zeroDateArray
}

const prepareBarSeries = (data) => {
	let BarData = []
	let LineData = []
	let i
	let barHeight = 0

	BarData.push([CreatePoint(data[0])])
	LineData.push(CreatePoint(data[0]))
	for (i=1; i<data.length; i++) {
		const barPoint = CreatePoint(data[i])
		const linePoint = CreatePoint(data[i])
		if (BarData[barHeight][BarData[barHeight].length-1].x === barPoint.x) {
			barHeight++
			LineData[LineData.length-1].y = LineData[LineData.length-1].y+linePoint.y
		}
		else {
			LineData.push(linePoint)
			barHeight = 0
		}
		if (barPoint.y!==0) {
			if (barPoint.y<0) {
				barPoint.y=0
			}
			if (BarData[barHeight] === undefined){
				BarData.push([barPoint])
			}
			else {
				BarData[barHeight].push(barPoint)
			}
		}
	}
	return {BarData: BarData, LineData: LineData}
}

const dateFormater = (v) => {
	const d = !v.includes('skip') ? new Date(v) : new Date(0)
	if (Date.parse(d) === 0)
		return <tspan dx="1.5em" dy="0.5em">...</tspan>
	else
		return <tspan dx="1.5em" dy="0.5em">{(d.getDate()+'/'+(d.getMonth()+1))}</tspan>
}

const convertBarDataToElement = (barData) => {
	const BarSeries = VerticalBarSeries;
	const BarArray = []
	let data = barData
	data[0]=addZeroDays(barData[0])
	let i
	for (i=0; i<barData.length; i++) {
		BarArray.push(<BarSeries data={data[i]} key={i}/>)
	}

	return BarArray
}

const convertLineDataToLine = (lineData) => {
	const Line = addZeroDays(lineData)
	let data = []
	let i
	data.push(Line[0])
	for (i=1; i<Line.length; i++) {
		data.push({x: new Date(Line[i].x), y: (Line[i].y + data[i-1].y)})
	}
	return <LineSeries data={data} 
					style= {{fill: 'none', stroke: '#e20a0a'}}/>
}

const StatsBarChartArea = ({data, width, height}) => {
  const margins = { top: 40, left: 40, right: 40}
  const chartData = prepareBarSeries(data)
  const Bars = convertBarDataToElement (chartData.BarData)
	const Line = convertLineDataToLine (chartData.LineData)
  return <div className='center'>
					<div style={{ position: 'relative' }}>
					  <div>
							<XYPlot width={width} height={height} margin={margins} stackBy='y' xType='ordinal'>
								<VerticalGridLines />
								<HorizontalGridLines />
								<XAxis
									tickFormat= {dateFormater}
									position = {'middle'}
									tickPadding = {5}
									tickLabelAngle={90}
								/>
								<YAxis/>
							  <ChartLabel
							    text="Daily sum"
							    className="alt-y-label"
							    includeMargin={false}
							    xPercent={0}
							    yPercent={0.06}
							    style={{
							      textAnchor: 'middle'
							    }}
						    />
							  <ChartLabel
							    text="(bars)"
							    className="alt-y-label"
							    includeMargin={false}
							    xPercent={0}
							    yPercent={0.12}
							    style={{
							      textAnchor: 'middle'
							    }}
						    />   
								{Bars}
							</XYPlot>
				     </div>
					    <div style={{ position: 'absolute', top: 0 }}>
						    <XYPlot width={width} height={height} margin={margins} xType='ordinal'>
					      <YAxis orientation="right"/>
							  <ChartLabel
							    text="Total sum"
							    className="alt-y-label"
							    includeMargin={false}
							    xPercent={1}
							    yPercent={0.06}
							    style={{
							      textAnchor: 'middle'
							    }}
						    />
							  <ChartLabel
							    text="(line)"
							    className="alt-y-label"
							    includeMargin={false}
							    xPercent={1}
							    yPercent={0.12}
							    style={{
							      textAnchor: 'middle'
							    }}
						    />
					      {Line}
						    </XYPlot>
						  </div>
					  </div>
				  </div>
}

export default StatsBarChartArea
