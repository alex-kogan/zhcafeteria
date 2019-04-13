import React from 'react';

import AdminTable from './AdminTable'
import AdminControls from './AdminControls'

const adminBody = (userDataList) => {
  if (userDataList.length!==0)
  {
  	userDataList.sort((a, b) => {
	    if(a.name < b.name) { return -1; }
	    if(a.name > b.name) { return 1; }
	    return 0;
  	});
  	console.log(userDataList)
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