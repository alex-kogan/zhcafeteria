import React from 'react'

import AdminTableRow from './AdminTableRow'

import './AdminTable.css'

const sortByName = (a,b) => {
  if(a.fullName < b.fullName) { return -1; }
  if(a.fullName > b.fullName) { return 1; }
  return 0;
}

const dispayTable = (TableData) => {
  if (TableData.length > 1) {
    TableData.sort((a,b) => sortByName(a,b))
  }
  return TableData
}

const AdminTable = ({TableData}) => {
  let userTable = dispayTable(TableData)
  return <section>
  <div className="container">
    <table className="f6 w-100">
      <thead className='bg-white'>
        <tr className="header">
          <th className="fw6 tl pr3 bg-white w-50">
            <div className='bg-white bb w-100'>Name</div>
          </th>
          <th className="fw6 tl pr3 bg-white w-25">
            <div className='bg-white w-20 bb'>Current value</div>
          </th>
          <th className="fw6 tl pr3 bg-white w-25">
            <div className='bg-white bb'>Reset date</div>
          </th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      	{
      		userTable.map((dataRow, index) => {
      			return <AdminTableRow DataRow ={dataRow} key={index}/>
      		})	
      	} 	
      </tbody>
    </table>
  </div>
</section>
}

export default AdminTable