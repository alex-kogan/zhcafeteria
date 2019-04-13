import React from 'react'

const niceDate = (dateValue) => {
	const date = new Date(dateValue)
	const day=date.getDate()
	const month=date.getMonth()+1
	const year=date.getFullYear()

	return [day,month,year].join('/')
	//const time=date.getHours()+':'+date.getMinutes()

	//return [day,month,year].join('/')+' '+time
}

const AdminTableRow = ({DataRow}) => {
	return <tr className="pa3 bb tl b--black-20">
		<td>{DataRow.name}</td>
		<td>{DataRow.currentValue} CHF</td>
		<td>{niceDate(DataRow.valueResetDate)}</td>
  </tr>
}

export default AdminTableRow