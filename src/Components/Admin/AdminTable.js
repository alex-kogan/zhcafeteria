import React from 'react'

import AdminTableRow from './AdminTableRow'

import './AdminTable.css'

const AdminTable = ({TableData}) => {
	return <section>
  <div className="container">
    <table className="f6 w-100">
      <thead className='bg-white'>
        <tr className="header">
          <th className="fw6 tl pb3 pr3 bg-white bb w-50">
            <div className='bg-white bb w-100'>Name</div>
          </th>
          <th className="fw6 tl pb3 pr3 bg-white bb w-25">
            <div className='bg-white bb'>Current value</div>
          </th>
          <th className="fw6 tl pb3 pr3 bg-white bb w-25">
            <div className='bg-white bb'>Reset date</div>
          </th>
        </tr>
      </thead>
      <tbody className="lh-copy">
      	{
      		TableData.map((dataRow, index) => {
      			return <AdminTableRow DataRow ={dataRow} key={index}/>
      		})	
      	}
      	{
      		TableData.map((dataRow, index) => {
      			return <AdminTableRow DataRow ={dataRow} key={index}/>
      		})	
      	}      	
      </tbody>
    </table>
  </div>
</section>
}

export default AdminTable