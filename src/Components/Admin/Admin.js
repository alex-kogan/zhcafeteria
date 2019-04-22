import React from 'react';
import LoadingOverlay from 'react-loading-overlay';

import './Admin.css'

import AdminTable from './AdminTable'
import AdminControls from '../../Containers/AdminControls'

const adminBody = (userDataList, adminProcessing) => {
  console.log(adminProcessing)
  if (adminProcessing)
    return <LoadingOverlay
      active={adminProcessing}
      spinner
      text='Loading data...'
    >
      <div id='loading'></div>
    </LoadingOverlay>	
  else {
  	return <AdminTable TableData={userDataList}/>
  }
}

const AdminPage = ({userDataList, adminProcessing}) => {
  return (
    <div id='Admin'>
    	<AdminControls/>
    	{adminBody(userDataList, adminProcessing)}
  	</div>
	)
}

export default AdminPage;