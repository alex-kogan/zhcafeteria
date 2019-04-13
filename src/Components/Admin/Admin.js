import React from 'react';

import AdminTable from './AdminTable'
import AdminControls from '../../Containers/AdminControls'

const adminBody = (userDataList) => {
  if (userDataList.length!==0)
  {
  	return <AdminTable TableData={userDataList}/>
  }
  else {
  	return 'loading'
  }
}

const AdminPage = ({userDataList}) => {
  return (
    <div id='Admin'>
    	<AdminControls/>
    	{adminBody(userDataList)}
  	</div>
	)
}

export default AdminPage;