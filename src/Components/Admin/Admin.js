import React from 'react';

const adminBody = (userDataList) => {
  if (userDataList.length!==0)
  {
    return userDataList[0].name
  }
  else {
  	return 'loading'
  }
}

const AdminPage = ({userDataList}) => {
  return (
    <div id='Admin'>
    	{adminBody(userDataList)}
  	</div>
	)
}

export default AdminPage;