import React from 'react';

import * as d3 from 'd3'

const margin = {top: 40, right: 40, bottom: 40, left:40}

const msToDay = 1000*60*60*24

const addAxis = (transactionData, width, height) => {
	if (transactionData.length!==0) {	
		const svg = d3.select("svg")
		const xScale = createXScale(transactionData, width, height)
		const yScale = createYScale(transactionData, width, height)
		const xAxis = d3.axisBottom(xScale)
		  .tickFormat(d3.timeFormat('%d/%m'))
		  // .tickSize(0)
		  // .tickPadding(20);
		const yAxis = d3.axisLeft(yScale)
		if (document.getElementById('barChartArea')!== null) {
			if (document.getElementById('barChartArea').contains(document.getElementById('xAxis'))) {
				document.getElementById('barChartArea').removeChild(document.getElementById('xAxis'))
			}
			if (document.getElementById('barChartArea').contains(document.getElementById('yAxis'))) {
				document.getElementById('barChartArea').removeChild(document.getElementById('yAxis'))
			}
		}
	  svg.append('g')
	  .attr('id', 'xAxis')
	  .attr('transform', 'translate('+ margin.left + ',' + (height - margin.bottom) + ')')
	  .call(xAxis);

	  svg.append('g')
	  .attr('id', 'yAxis')
	  .attr('transform', 'translate('+ margin.left + ',' + margin.bottom + ')')
	  .call(yAxis);
	}
}

const setToMidnight = (dayInMs) => {
	return Math.floor(dayInMs/msToDay)*msToDay
}

const createXScale = (transactionData, width, height) => {
	if (transactionData.length!==0) {	
		const firstDay=setToMidnight(Date.parse(transactionData[0].transactionDate))-msToDay
		const lastDay=setToMidnight(Date.parse(transactionData[transactionData.length-1].transactionDate))+msToDay
		const x = d3.scaleTime().domain([firstDay, lastDay]).range([0, width - margin.left - margin.right])
		return x
	}
}

const createYScale = (transactionData, width, height) => {
	if (transactionData.length!==0) {
		const y = d3.scaleLinear().domain([0, d3.max(transactionData, (d) => { return d.transactionAmount })*1.1]).range([height - margin.top - margin.bottom, 0]);
		return y
	}
} 

const prepareBarData = (transactionData, width, height) => {
	if (transactionData.length!==0) {
		const firstDay=Date.parse(transactionData[0].transactionDate)-msToDay
		const lastDay=Date.parse(transactionData[transactionData.length-1].transactionDate)+msToDay
		const dayDiff = Math.round((lastDay-firstDay)/msToDay)
		const barWidth = (width - margin.left - margin.right)/ dayDiff
		const xScale = createXScale(transactionData, width, height)
		const yScale = createYScale(transactionData, width, height)
		const barData = transactionData.map((td, index) => {
			const barHeight = td.transactionAmount > 0 ? td.transactionAmount : 0
			const barElement = {
				x: margin.left + xScale(setToMidnight(Date.parse(td.transactionDate)))-barWidth/2,
				y: height - margin.bottom - (height - margin.top - margin.bottom - yScale(barHeight)),
				height: height - margin.top - margin.bottom - yScale(barHeight),
				width:barWidth*0.95,
				fill:'#357EDD'
			}
			return barElement
		})
		return barData
	}
	else {return []}
}

const StatsBarChartArea = ({transactionData, width, height}) => {
	const barsData = prepareBarData(transactionData, width, height)
  const bars = barsData.map((d,index) => <rect x={d.x} y={d.y} height={d.height} width={d.width} fill={d.fill} key={index}/>)

  return <div className='center'>
           <svg id='barChartArea' width={width} height={height}>{bars}</svg>
           {addAxis(transactionData, width, height)}
         </div>
}

export default StatsBarChartArea
